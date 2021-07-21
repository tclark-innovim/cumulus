import { FailedAttemptError } from 'p-retry';

import Logger from '@cumulus/logger';
const log = new Logger({ sender: '@cumulus/db' });

const onFailedAttemptFunction = (error: FailedAttemptError) => {
  if (error.name === 'KnexTimeoutError'
  || error.message.includes('sorry, too many clients')
  || error.message.includes('remaining connection slots are reserved')) {
    log.warn(`Failed intial attempt at RDS DB connection due to ${error.name} -- ${error.message}`);
    return Promise.resolve();
  }
  throw error;
};

export const retryConfiguration = ({
  envOverride = {},
}: {
  envOverride?: NodeJS.ProcessEnv
} = {}) => {
  const env = { ...process.env, ...envOverride } as NodeJS.ProcessEnv;
  if (env.dbRetryFailedConnection === 'true') {
    return {
      retries: Number(env?.dbRetryConfigRetries) || 5,
      maxTimeout: Number(env?.dbRetryConfigMaxTimeout) || 60 * 1000,
      minTimeout: Number(env?.dbRetryConfigMinTimeout) || 5 * 1000,
      factor: Number(env?.dbRetryConfigFactor) || 2,
      onFailedAttempt: onFailedAttemptFunction,
    };
  }
  return {
    retries: 0,
  };
};
