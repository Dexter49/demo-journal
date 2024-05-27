import React from 'react';
import ReactDOM from 'react-dom';
import TravelJournal from './TravelJournal';
import './assets/styles/App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

ReactDOM.render(<TravelJournal />, document.getElementById('root'));
