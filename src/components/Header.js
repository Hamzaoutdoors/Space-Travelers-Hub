import React from 'react';
import {
  Navbar, Container,
} from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import logo from '../media/planet.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <Navbar bg="light" expand="lg" className="py-0">
    <Container className="nav-wrapper">
      <Navbar.Brand href="#home" className="App-header d-flex align-items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="header-title">
          Space Travelers&apos; Hub
        </h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <NavbarComponent />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
