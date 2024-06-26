import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

ReactDOM.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>,
  document.getElementById('root')
);
