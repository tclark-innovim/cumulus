'use strict';

const test = require('ava');
const proxyquire = require('proxyquire');
const { generateGranules, handler } = require('..');
const {
  validateConfig,
  validateOutput,
} = require('@cumulus/common/test-utils');

const fileExists = () => true
const files = {
  workflowtemplate: require('./data/workflow_template.json'),
  workflowfilekey: require('./data/workflow.json'),
}
const getJsonS3Object = async (_bucket, path) => path === 'workflowfilekey' ? files.workflowfilekey : files.workflowtemplate
const { buildPayload } = proxyquire('../../../packages/api/lib/rulesHelpers', {
  '@cumulus/aws-client/S3': { 
    fileExists,
    getJsonS3Object
  },
  '@cumulus/common/workflows': {
    getWorkflowFileKey: () => 'workflowfilekey'
  }
});

const { handleScheduleEvent } = proxyquire('../../../packages/api/lambdas/sf-scheduler', {
  '@cumulus/api-client/providers': { 
    getProvider: async () => {
      const provider = require('../../../example/data/providers/s3/s3_provider.json')
      return { body: JSON.stringify(provider) }
    }
  },
  '@cumulus/api-client/collections': { getCollection: async () => require('../../../example/data/collections/http_testcollection_001/http_testcollection_001.json'), },
  '@cumulus/aws-client/SQS': { sendSQSMessage: async (_, message) => message }
})

test('Test returns unique granule ids', async (t) => {
  const count = 10;
  const event = {
    config: { count },
    input: { },
  };
  await validateConfig(t, event.config);
  const { granules } = await generateGranules(event);
  await validateOutput(t, { granules });
  const granuleIds = new Set(granules.map((g) => g.granuleId));
  t.is(granuleIds.size, count);
  t.is(granules.length, count);
  t.truthy(
    granules.every((g) => !g.provider)
  );
  t.truthy(
    granules.every((g) => g.dataType === 'fake-collection')
  );
  t.truthy(
    granules.every((g) => g.version === '001')
  );
});

test('Test returns the number of granules requested', async (t) => {
  const count = 10;
  const event = {
    config: { count },
    input: { },
  };
  await validateConfig(t, event.config);
  const { granules } = await generateGranules(event);
  await validateOutput(t, { granules });
  t.is(granules.length, count);
  t.truthy(
    granules.every((g) => !g.provider)
  );
  t.truthy(
    granules.every((g) => g.dataType === 'fake-collection')
  );
  t.truthy(
    granules.every((g) => g.version === '001')
  );
});

test('Test returns large number of granules when requested', async (t) => {
  const count = 10000;
  const event = {
    config: { count },
    input: { },
  };
  await validateConfig(t, event.config);
  const { granules } = await generateGranules(event);
  await validateOutput(t, { granules });
  t.is(granules.length, count);
  t.truthy(
    granules.every((g) => !g.provider)
  );
  t.truthy(
    granules.every((g) => g.dataType === 'fake-collection')
  );
  t.truthy(
    granules.every((g) => g.version === '001')
  );
});

test('Test sets provider if provided', async (t) => {
  const count = 10;
  const provider = {
    id: 'provider-1',
    host: 'localhost',
    protocol: 'ftp',
  };
  const event = {
    config: { count, provider },
    input: { },
  };
  await validateConfig(t, event.config);
  const { granules } = await generateGranules(event);
  await validateOutput(t, { granules });
  t.is(granules.length, count);
  t.truthy(
    granules.every((g) => g.provider === provider.id)
  );
  t.truthy(
    granules.every((g) => g.dataType === 'fake-collection')
  );
  t.truthy(
    granules.every((g) => g.version === '001')
  );
});

test('Test sets collection if provided', async (t) => {
  const count = 10;
  const provider = {
    id: 'provider-1',
    host: 'localhost',
    protocol: 'ftp',
  };
  const collection = {
    name: 'big time',
    version: '042',
    files: []
  };
  const event = {
    config: { count, provider, collection },
    input: { },
  };
  await validateConfig(t, event.config);
  const { granules } = await generateGranules(event);
  await validateOutput(t, { granules });
  t.is(granules.length, count);
  t.truthy(
    granules.every((g) => g.provider === provider.id)
  );
  t.truthy(
    granules.every((g) => g.dataType === collection.name)
  );
  t.truthy(
    granules.every((g) => g.version === collection.version)
  );
});

test('Test large count', async (t) => {
  const count = 10000;
  const provider = {
    id: 'provider-1',
    host: 'localhost',
    protocol: 'ftp',
  };
  const collection = {
    name: 'big time',
    version: '042',
    files: []
  };
  const event = {
    config: { count, provider, collection },
    input: { },
  };
  await validateConfig(t, event.config);
  const { granules } = await generateGranules(event);
  await validateOutput(t, { granules });
  t.is(granules.length, count);
  t.truthy(
    granules.every((g) => g.provider === provider.id)
  );
  t.truthy(
    granules.every((g) => g.dataType === collection.name)
  );
  t.truthy(
    granules.every((g) => g.version === collection.version)
  );
});

test('Message adapter is correct', async (t) => {
  process.env['CUMULUS_MESSAGE_ADAPTER_DIR'] = '/Users/squinlan/Documents/cumulus-message-adapter'
  process.env['system_bucket'] = 'squinlan-internal'
  process.env['stackName'] = 'squinlan'
  const rule = require('./data/rule.json');
  const payload = await buildPayload(rule);
  const event = await handleScheduleEvent(payload);

  // dont know when this happens for cma normally but I'll just do it now.
  const { "event.$": _, ... rest } = files.workflowfilekey.definition.States.GenerateGranules.Parameters.cma
  const cma = { event, ... rest }
  const output = await handler({ cma }, {});
  console.log(output)
});