import Knex from 'knex';
import pRetry from 'p-retry';

import { BasePgModel } from './base';
import { tableNames } from '../tables';

import { PostgresCollection, PostgresCollectionRecord } from '../types/collection';

class CollectionPgModel extends BasePgModel<PostgresCollection, PostgresCollectionRecord> {
  constructor() {
    super({
      tableName: tableNames.collections,
    });
  }

  upsert(
    knexOrTransaction: Knex | Knex.Transaction,
    collection: PostgresCollection
  ) {
    return pRetry(() => knexOrTransaction(this.tableName)
      .insert(collection)
      .onConflict(['name', 'version'])
      .merge()
      .returning('cumulus_id'),
    this.retryConfiguration());
  }
}

export { CollectionPgModel };
