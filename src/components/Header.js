import React from 'react';
import Navbar from './Navbar';
import logo from '../media/planet.png';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h3 className="header-title">
      Space Travelers&apos; Hub
    </h3>
    <Navbar />
  </header>
);

export default Header;
