import Knex from 'knex';
import pRetry from 'p-retry';

import { BasePgModel } from './base';
import { tableNames } from '../tables';

import { PostgresRule, PostgresRuleRecord } from '../types/rule';

class RulePgModel extends BasePgModel<PostgresRule, PostgresRuleRecord> {
  constructor() {
    super({
      tableName: tableNames.rules,
    });
  }

  upsert(
    knexOrTransaction: Knex | Knex.Transaction,
    rule: PostgresRule
  ) {
    return pRetry(() => knexOrTransaction(this.tableName)
      .insert(rule)
      .onConflict('name')
      .merge()
      .returning('cumulus_id'),
    this.retryConfiguration());
  }
}

export { RulePgModel };
