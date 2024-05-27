import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import TravelEntry from './pages/TravelEntry';
import SearchResults from './pages/SearchResults';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Itinerary from './pages/Itinerary';
import Statistics from './pages/Statistics';
import Help from './pages/Help';
import PrivacyTerms from './pages/PrivacyTerms';
import Navbar from './components/Navigation/Navbar';
import Sidebar from './components/Navigation/Sidebar';
import BottomNav from './components/Navigation/BottomNav';

const TravelJournal = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/entry/:id" component={TravelEntry} />
          <Route path="/search" component={SearchResults} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/settings" component={Settings} />
          <Route path="/itinerary" component={Itinerary} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/help" component={Help} />
          <Route path="/privacy-terms" component={PrivacyTerms} />
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
};

export default TravelJournal;
