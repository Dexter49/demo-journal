import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import TravelJournal from './TravelJournal';

function App() {
  return (
    <div className="App">
      <TravelJournal />
    </div>
  );
}

export default withAuthenticator(App);
