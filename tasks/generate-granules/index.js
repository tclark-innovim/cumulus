'use strict';
process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = '1';
const cumulusMessageAdapter = require('@cumulus/cumulus-message-adapter-js');
const log = require('@cumulus/common/log');
const range = require('lodash/range');

const FAKE_FILE_NAME = 'fake_file.mp3';
const FAKE_FILE_PATH = '/path/to/fake/file/';

/**
 * Generate example, fake granules. This is purely intended for testing workflows.
 *
 * @param {Object} event - input from the message adapter
 * @returns {Object} The collection of fake graules
 */
function generateGranules({ config }) {
  log.info(`Generating ${config.count} granules`);
  const granules = range(config.count).map(
    (idx) => ({
      granuleId: `granule-${idx}`,
      dataType: config.collection ? config.collection.name : 'fake-collection',
      version: config.collection ? config.collection.version : '001',
      ...(config.provider ? { provider: config.provider.id } : {}),
      files: [{ name: FAKE_FILE_NAME, path: FAKE_FILE_PATH }],
    })
  );
  log.info(`Generation done`);
  return { granules };
}
/**
 * Lambda handler
 *
 * @param {Object} event      - a Cumulus Message
 * @param {Object} context    - an AWS Lambda context
 * @returns {Promise<Object>} - sample JSON object
 */
async function handler(event, context) {
  return await cumulusMessageAdapter.runCumulusTask(generateGranules, event, context);
}

module.exports = { handler, generateGranules };
