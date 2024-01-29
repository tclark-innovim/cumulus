/**
 * @module SecretsManager
 */

import { secretsManager } from './services';

export const getSecretString = (SecretId: string) =>
  secretsManager().getSecretValue({ SecretId })
    .then((response) => response.SecretString);
