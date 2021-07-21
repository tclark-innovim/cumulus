import AWS from 'aws-sdk';
import Knex from 'knex';
import pRetry from 'p-retry';

import Logger from '@cumulus/logger';

import { getKnexConfig } from './config';
import { retryConfiguration } from './retry';

const log = new Logger({ sender: '@cumulus/db/connection' });

export const queryHeartbeat = async ({
  knex,
  env = {},
}: {
  knex: Knex,
  env: NodeJS.ProcessEnv,
}): Promise<void> => await pRetry(
  async () => {
    log.info('Sending Heartbeat Query');
    await knex.raw('SELECT 1');
    log.info('Heartbeat succeeded');
  },
  retryConfiguration({ envOverride: { dbRetryFailedConnection: 'true', ...env } })
);

/**
 * Given a NodeJS.ProcessEnv with configuration values, build and return
 * Knex client
 *
 * @param {Object} params
 * @param {NodeJS.ProcessEnv} params.env    - Object with configuration keys
 *
 * Requires either:
 * @param {string} params.env.PG_HOST       - Hostname database cluster
 * @param {string} params.env.PG_USER       - User to connect to the database
 * @param {string} params.env.PG_PASSWORD   - Password to use to connect to the database
 * @param {string} [params.env.PG_DATABASE] - postgres database to connect to on the db
 *   cluster
 *
 * Or:
 * @param {string} params.env.databaseCredentialSecretArn - key referencing an
 *   AWS SecretsManager Secret with required
 * `databaseCredentialSecretArn` keys:
 *   host     - Hostname database cluster
 *   username - User to connect to the database
 *   password - Password to use to connect to the database
 *   database - Optional - postgres database to connect to on the db cluster
 *
 * Additionally, the following are configuration options:
 * @param {string} [params.env.KNEX_ASYNC_STACK_TRACES] - If set to 'true' will
 *   enable knex async stack traces.
 * @param {string} [params.env.KNEX_DEBUG] - If set to 'true' will enable knex
 *   debugging
 * @param {string} [params.env.acquireConnectionTimeout] - Knex
 *   acquireConnectionTimeout connection timeout
 * @param {string} [params.env.migrationDir] - Directory to look in for
 *   migrations
 * @param {string} params.env.dbHeartBeat - Configuration option if set to 'true'
 *                                          causes the method to test the connection
 *                                          before returning a knex object.  Will retry
 *                                          on KnexTimeOutError due possible RDS serverless
 *                                          deployment architechtures
 * @returns {Promise<Knex>} a Knex configuration object that has returned at least one query
 */
export const getKnexClient = async ({
  env = process.env,
  secretsManager = new AWS.SecretsManager(),
}: {
  env?: NodeJS.ProcessEnv,
  secretsManager?: AWS.SecretsManager
} = {}): Promise<Knex> => {
  const knexConfig = await getKnexConfig({ env, secretsManager });
  const knex = Knex(knexConfig);
  if (env.dbHeartBeat === 'true') {
    try {
      await queryHeartbeat({ knex, env });
    } catch (error) {
      knex.destroy();
      throw error;
    }
  }
  return knex;
};
