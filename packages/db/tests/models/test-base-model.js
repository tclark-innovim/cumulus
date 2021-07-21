const test = require('ava');
const sinon = require('sinon');
const { KnexTimeoutError } = require('knex');
const cryptoRandomString = require('crypto-random-string');

const { RecordDoesNotExist } = require('@cumulus/errors');

const { localStackConnectionEnv } = require('../../dist/config');
const { getKnexClient } = require('../../dist/connection');
const { BasePgModel } = require('../../dist/models/base');
test.before(async (t) => {
  t.context.knex = await getKnexClient({
    env: { ...localStackConnectionEnv, dbHeartBeat: 'true' },
  });
  t.context.tableName = cryptoRandomString({ length: 10 });
  await t.context.knex.schema.createTable(t.context.tableName, (table) => {
    table.increments('cumulus_id').primary();
    table.text('info');
  });
  t.context.basePgModel = new BasePgModel({ tableName: t.context.tableName });
  process.env.dbRetryFailedConnection = 'true';
});

test.after.always(async (t) => {
  await t.context.knex.schema.dropTable(t.context.tableName);
});

test('BasePgModel.create() creates record and returns cumulus_id by default', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });

  const queryResult = await basePgModel.create(knex, { info });

  const record = await knex(tableName).where({ info }).first();
  t.deepEqual(
    record,
    {
      cumulus_id: queryResult[0],
      info,
    }
  );
});

test('BasePgModel.create() works with knex transaction', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });

  const queryResult = await knex.transaction(
    (trx) => basePgModel.create(trx, { info })
  );

  const record = await knex(tableName).where({ info }).first();
  t.deepEqual(
    record,
    {
      cumulus_id: queryResult[0],
      info,
    }
  );
});

test('BasePgModel.create() retries on DB failure', async (t) => {
  const { basePgModel } = t.context;
  const insertStub = sinon.stub();
  const expected = ({ id: 1 });
  console.log('foobar');
  insertStub.onCall(0).throws(new KnexTimeoutError());
  insertStub.onCall(1).returns({ returning: () => expected });
  const knex = () => ({ insert: () => insertStub() });
  const actual = await basePgModel.create(knex, {});
  t.deepEqual(expected, actual);
});

test('BasePgModel.get() returns correct record', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  await knex(tableName).insert({ info });
  t.like(
    await basePgModel.get(knex, { info }),
    {
      info,
    }
  );
});

test('BasePgModel.get() works with knex transaction', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  await knex(tableName).insert({ info });
  t.like(
    await knex.transaction((trx) => basePgModel.get(trx, { info })),
    {
      info,
    }
  );
});

test('BasePgModel.get() throws an error when a record is not found', async (t) => {
  const { knex, basePgModel } = t.context;
  const info = cryptoRandomString({ length: 10 });
  await t.throwsAsync(
    knex.transaction((trx) => basePgModel.get(trx, { info })),
    { instanceOf: RecordDoesNotExist }
  );
});

test('BasePgModel.get() retries on DB failure', async (t) => {
  const { basePgModel } = t.context;
  const whereStub = sinon.stub();
  const expected = { id: 1 };
  console.log('foobar');
  whereStub.onCall(0).throws(new KnexTimeoutError());
  whereStub.onCall(1).returns({ first: () => expected });
  const knex = () => ({ where: () => whereStub() });
  const actual = await basePgModel.get(knex, {});
  t.deepEqual({ id: 1 }, actual);
});

test('BasePgModel.getRecordCumulusId() returns correct value', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  const [recordCumulusId] = await knex(tableName)
    .insert({ info })
    .returning('cumulus_id');
  t.is(
    await basePgModel.getRecordCumulusId(knex, { info }),
    recordCumulusId
  );
});

test('BasePgModel.getRecordCumulusId() works with knex transaction', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  const [recordCumulusId] = await knex(tableName)
    .insert({ info })
    .returning('cumulus_id');
  t.is(
    await knex.transaction(
      (trx) => basePgModel.getRecordCumulusId(trx, { info })
    ),
    recordCumulusId
  );
});

test('BasePgModel.getRecordCumulusId() throws RecordDoesNotExist error for missing record', async (t) => {
  const { knex, basePgModel } = t.context;
  const info = cryptoRandomString({ length: 5 });
  await t.throwsAsync(
    basePgModel.getRecordCumulusId(knex, { info }),
    { instanceOf: RecordDoesNotExist }
  );
});

test('BasePgModel.getRecordCumulusId() retries on DB failure', async (t) => {
  const { basePgModel } = t.context;
  const selectStub = sinon.stub();
  const expectedRecord = { cumulus_id: 1 };
  console.log('foobar');
  selectStub.onCall(0).throws(new KnexTimeoutError());
  selectStub.onCall(1).returns({ where: () => ({ first: () => expectedRecord }) });
  const knex = () => ({ select: () => selectStub() });
  const actual = await basePgModel.getRecordCumulusId(knex, {});
  t.deepEqual(expectedRecord.cumulus_id, actual);
});

test('BasePgModel.getRecordsCumulusIds() returns correct values', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info1 = cryptoRandomString({ length: 5 });
  const info2 = cryptoRandomString({ length: 5 });
  const recordsCumulusIds = await knex(tableName)
    .insert([{ info: info1 }, { info: info2 }])
    .returning('cumulus_id');
  t.is(recordsCumulusIds.length, 2);
  t.deepEqual(
    await basePgModel.getRecordsCumulusIds(knex, ['info'], [info1, info2]),
    recordsCumulusIds
  );
});

test('BasePgModel.getRecordsCumulusIds() works with knex transaction', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info1 = cryptoRandomString({ length: 5 });
  const info2 = cryptoRandomString({ length: 5 });
  const recordsCumulusIds = await knex(tableName)
    .insert([{ info: info1 }, { info: info2 }])
    .returning('cumulus_id');
  t.is(recordsCumulusIds.length, 2);
  t.deepEqual(
    await knex.transaction(
      (trx) => basePgModel.getRecordsCumulusIds(trx, ['info'], [info1, info2])
    ),
    recordsCumulusIds
  );
});

test('BasePgModel.getRecordsCumulusIds() retries on DB failure', async (t) => {
  const { basePgModel } = t.context;
  const selectStub = sinon.stub();
  const expectedRecord = { cumulus_id: 1 };
  console.log('foobar');
  selectStub.onCall(0).throws(new KnexTimeoutError());
  selectStub.onCall(1).returns({ whereIn: () => [expectedRecord] });
  const knex = () => ({ select: () => selectStub() });
  const actual = await basePgModel.getRecordsCumulusIds(knex, [], []);
  t.deepEqual([expectedRecord.cumulus_id], actual);
});

test('BasePgModel.exists() correctly returns true', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  await knex(tableName).insert({ info });
  t.true(await basePgModel.exists(knex, { info }));
});

test('BasePgModel.exists() works with knex transaction', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  await knex(tableName).insert({ info });
  t.true(await knex.transaction(
    (trx) => basePgModel.exists(trx, { info })
  ));
});

test('BasePgModel.exists() correctly returns false', async (t) => {
  const { knex, basePgModel } = t.context;
  const info = cryptoRandomString({ length: 5 });
  t.false(await basePgModel.exists(knex, { info }));
});

test('BasePgModel.delete() correctly deletes records', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });

  // Insert the records and validate that they exists in the table
  const [[recordCumulusId1], [recordCumulusId2]] = await Promise.all([
    knex(tableName)
      .insert({ info })
      .returning('cumulus_id'),
    knex(tableName)
      .insert({ info })
      .returning('cumulus_id'),
  ]);

  t.true(await basePgModel.exists(knex, { cumulus_id: recordCumulusId1 }));
  t.true(await basePgModel.exists(knex, { cumulus_id: recordCumulusId2 }));

  // Delete the records and validate that they're gone
  t.is(
    await basePgModel.delete(knex, { info }),
    2
  );

  t.false(await basePgModel.exists(knex, { cumulus_id: recordCumulusId1 }));
  t.false(await basePgModel.exists(knex, { cumulus_id: recordCumulusId2 }));
});

test('BasePgModel.delete() works with knex transaction', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });

  const [recordCumulusId] = await knex(tableName)
    .insert({ info })
    .returning('cumulus_id');

  t.is(await knex.transaction(
    (trx) => basePgModel.delete(trx, { cumulus_id: recordCumulusId })
  ), 1);

  // validate that the record is not in the table
  t.false(await basePgModel.exists(knex, { cumulus_id: recordCumulusId }));
});

test('BasePgModel.delete() retries on DB failure', async (t) => {
  const { basePgModel } = t.context;
  const whereStub = sinon.stub();
  console.log('foobar');
  whereStub.onCall(0).throws(new KnexTimeoutError());
  whereStub.onCall(1).returns({ del: () => 1 });
  const knex = () => ({ where: () => whereStub() });
  const actual = await basePgModel.delete(knex, {});
  t.is(1, actual);
});

test('BasePgModel.count() returns valid counts', async (t) => {
  const { knex, basePgModel, tableName } = t.context;

  await knex(tableName)
    .insert({ info: 1 })
    .returning('cumulus_id');

  await knex(tableName)
    .insert({ info: 2 })
    .returning('cumulus_id');

  await knex(tableName)
    .insert({ info: 3 })
    .returning('cumulus_id');

  t.deepEqual(await knex.transaction(
    (trx) => basePgModel.count(trx, [[{ info: 2 }]])
  ), [{ count: '1' }]);

  t.deepEqual(await knex.transaction(
    (trx) => basePgModel.count(trx, [['info', '=', '2']])
  ), [{ count: '1' }]);
});

test('BasePgModel.count() retries on DB failure', async (t) => {
  const { basePgModel } = t.context;
  const whereStub = sinon.stub();
  console.log('foobar');
  whereStub.onCall(0).throws(new KnexTimeoutError());
  whereStub.onCall(1).returns({ count: () => 1 });
  const knex = () => ({ where: () => whereStub() });
  const actual = await basePgModel.count(knex, {});
  t.is(1, actual);
});

test('BasePgModel.search() returns an array of records', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  const recordBody = { info };

  await Promise.all([
    knex(tableName).insert(recordBody),
    knex(tableName).insert(recordBody),
    knex(tableName).insert(recordBody),
  ]);

  const searchResponse = await basePgModel.search(knex, recordBody);

  t.is(searchResponse.length, 3);

  searchResponse.forEach((r) => {
    t.like(r, recordBody);
  });
});

test('BasePgModel.search() returns an empty array if nothing found', async (t) => {
  const { knex, basePgModel } = t.context;
  const info = cryptoRandomString({ length: 5 });
  const recordBody = { info };

  const searchResponse = await basePgModel.search(knex, recordBody);

  t.deepEqual(searchResponse, []);
});

test('BasePgModel.search() works with knex transaction', async (t) => {
  const { knex, basePgModel, tableName } = t.context;
  const info = cryptoRandomString({ length: 5 });
  const recordBody = { info };

  await Promise.all([
    knex(tableName).insert(recordBody),
    knex(tableName).insert(recordBody),
    knex(tableName).insert(recordBody),
  ]);

  const searchResponse = await knex.transaction(async (trx) =>
    await basePgModel.search(trx, recordBody));

  t.is(searchResponse.length, 3);

  searchResponse.forEach((r) => {
    t.like(r, recordBody);
  });
});

test('BasePgModel.search() retries on DB search', async (t) => {
  const { basePgModel } = t.context;
  const whereStub = sinon.stub();
  console.log('foobar');
  whereStub.onCall(0).throws(new KnexTimeoutError());
  whereStub.onCall(1).returns([1]);
  const knex = () => ({ where: () => whereStub() });
  const actual = await basePgModel.search(knex, {});
  t.deepEqual([1], actual);
});

test('BasePgModel.update() updates provided fields on a record', async (t) => {
  const {
    knex,
    basePgModel,
    tableName,
  } = t.context;

  // Create initial record
  const info = cryptoRandomString({ length: 5 });
  const [cumulusId] = await basePgModel.create(knex, { info });

  // Update record
  const newInfo = cryptoRandomString({ length: 5 });
  await basePgModel.update(knex, { cumulus_id: cumulusId }, { info: newInfo });

  const record = await knex(tableName).where({ cumulus_id: cumulusId }).first();
  t.deepEqual(
    record,
    {
      cumulus_id: cumulusId,
      info: newInfo,
    }
  );
});

test('BasePgModel.update() returns only specified fields if provided', async (t) => {
  const {
    knex,
    basePgModel,
  } = t.context;

  // Create initial record
  const info = cryptoRandomString({ length: 5 });
  const [cumulusId] = await basePgModel.create(knex, { info });

  // Update record
  const newInfo = cryptoRandomString({ length: 5 });
  const updatedFields = await basePgModel.update(
    knex,
    { cumulus_id: cumulusId }, { info: newInfo }, ['info']
  );

  t.deepEqual(
    updatedFields,
    [{ info: newInfo }]
  );
});

test('BasePgModel.update() works with a knex transaction', async (t) => {
  const {
    knex,
    basePgModel,
    tableName,
  } = t.context;

  // Create initial record
  const info = cryptoRandomString({ length: 5 });
  const [cumulusId] = await basePgModel.create(knex, { info });

  // Update record
  const newInfo = cryptoRandomString({ length: 5 });

  // Use existing transation rather than knex client
  await knex.transaction(async (trx) =>
    await basePgModel.update(trx, { cumulus_id: cumulusId }, { info: newInfo }));

  const record = await knex(tableName).where({ cumulus_id: cumulusId }).first();
  t.deepEqual(
    record,
    {
      cumulus_id: cumulusId,
      info: newInfo,
    }
  );
});

test('BasePgModel.update() retries on DB update', async (t) => {
  const { basePgModel } = t.context;
  const whereStub = sinon.stub();
  console.log('foobar');
  whereStub.onCall(0).throws(new KnexTimeoutError());
  whereStub.onCall(1).returns({ update: () => 1 });
  const knex = () => ({ where: () => whereStub() });
  const actual = await basePgModel.update(knex, {});
  t.deepEqual(1, actual);
});
