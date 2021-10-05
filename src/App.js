import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/navbar/Header';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import { getRockets } from './redux/rockets/rockets';
import { fetchMissionsAction } from './redux/missions/missions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(fetchMissionsAction());
  }, []);

  return (
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
};

export default App;
