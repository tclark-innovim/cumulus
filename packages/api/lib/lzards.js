'use strict';

const { getRequiredEnvVar } = require('@cumulus/common/env');
const { getSecretString } = require('@cumulus/aws-client/SecretsManager');
const { getLaunchpadToken } = require('@cumulus/launchpad-auth');
const got = require('got');
const Logger = require('@cumulus/logger');

const log = new Logger({ sender: 'api/lib/lzards' });

async function getAuthToken() {
  const api = getRequiredEnvVar('launchpad_api');
  const passphrase = await getSecretString(getRequiredEnvVar('launchpad_passphrase_secret_name'));
  if (!passphrase) {
    throw new Error('The value stored in "launchpad_passphrase_secret_name" must be defined');
  }
  const certificate = getRequiredEnvVar('launchpad_certificate');
  const token = await getLaunchpadToken({
    api, passphrase, certificate,
  });
  return token;
}

/**
 * Send GET request to LZARDS
 *
 * @param {Object} params
 * @param {string} params.lzardsApiUri - LZARDS endpoint url
 * @param {string} params.queryParams - string containing query parameters to pass to lzards
 * @returns {Promise<Object>} - resolves to the LZARDS return
 */
async function sendGetRequestToLzards({ lzardsApiUri = process.env.lzards_api, queryParams }) {
  if (!lzardsApiUri) {
    const errMsg = 'The lzards_api environment variable is not set';
    log.error(errMsg);
    throw new Error(errMsg);
  }

  if (!queryParams) {
    const errMsg = 'The required queryParams parameter is not set';
    log.error(errMsg);
    throw new Error(errMsg);
  }

  const authToken = await getAuthToken();

  try {
    return await got.get(
      `${lzardsApiUri}${queryParams}`,
      {
        responseType: 'json',
        throwHttpErrors: false,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
  } catch (error) {
    log.error('sendGetRequestToLzards encountered error:', error);
    throw error;
  }
}

module.exports = {
  sendGetRequestToLzards,
};