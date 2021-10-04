import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main bg="light">
      <Switch>
        <Route path="/" exact>
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
