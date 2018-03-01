import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import rg4js from 'raygun4js';

console.log('Initialisation Begin', window.onerror);
rg4js('enableCrashReporting', true);
rg4js('apiKey', 'random');
console.log('Init Done', window.onerror);

ReactDOM.render(<App />, document.getElementById('root'));
