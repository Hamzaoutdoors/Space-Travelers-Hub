import React from 'react';
// import { motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/navbar/Header';
import Profile from './components/profile/Profile';
import Rockets from './pages/Rockets';
import Missions from './components/missions/Missions';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main className="bg-light App-container">
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
