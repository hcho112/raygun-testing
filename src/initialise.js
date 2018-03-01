import rg4js from 'raygun4js';

console.log('Initialisation Begin');
Promise.all([rg4js('enableCrashReporting', true), rg4js('apiKey', 'random')])
  .then(() => console.log('Initialisation Complete'));
