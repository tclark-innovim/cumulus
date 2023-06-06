'use strict';

process.env.NODE_ENV = 'production';
process.env.CUMULUS_MESSAGE_ADAPTER_DIR = '/Users/squinlan/Documents/cumulus-message-adapter';
process.env.system_bucket = 'squinlan-internal';
process.env.stackName = 'squinlan';

const test = require('ava');
const { handler } = require('..');

test.skip('Message adapter is correct', async (t) => {
  // const rule = require('./data/rule.json');
  // const payload = await buildPayload(rule);
  // const event = await handleScheduleEvent(payload);

  // dont know when this happens for cma normally but I'll just do it now.
  // const { "event.$": _, ... rest } =
  //   files.workflowfilekey.definition.States.GenerateGranules.Parameters.cma
  // const cma = { event, ... rest }

  const message = {
    cma: {
      task_config: {
        queueUrl: 'https://sqs.us-east-1.amazonaws.com/596205514787/squinlan-startSF',
        provider: '{$.meta.provider}',
        internalBucket: '{$.meta.buckets.internal.name}',
        stackName: '{$.meta.stack}',
        granuleIngestWorkflow: 'IngestGranule',
        childWorkflowMeta: {
          staticValue: 'aStaticValue',
          interpolatedValueStackName: '{$.meta.stack}',
        },
        preferredQueueBatchSize: '{$.meta.queueBatchSize}',
      },
      event: {
        cumulus_meta: {
          cumulus_version: '15.0.0',
          execution_name: '45aa55ee-1364-49bf-b8b2-9e7e2fa5b99c',
          message_source: 'sfn',
          queueExecutionLimits: {
            'https://sqs.us-east-1.amazonaws.com/596205514787/squinlan-ThrottledQueue': 30,
            'https://sqs.us-east-1.amazonaws.com/596205514787/squinlan-backgroundProcessing': 5,
          },
          state_machine: 'arn:aws:states:us-east-1:596205514787:stateMachine:squinlan-DiscoverGranules',
          system_bucket: 'squinlan-internal',
          workflow_start_time: 1686179918997,
        },
        replace: {
          Bucket: 'squinlan-internal',
          Key: 'events/c0e513e0-2a7f-40e9-9b71-1e197aa5e796',
          TargetPath: '$',
        },
      },
    },
  };
  const output = await handler(message, {
    function_name: 'squinlan-QueueGranules',
    function_version: '20',
    arn: 'arn:aws:lambda:us-east-1:596205514787:function:squinlan-QueueGranules',
  });
  t.is(output.payload.running.length, 3);
});
