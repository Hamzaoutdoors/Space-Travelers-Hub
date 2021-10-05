import React from 'react';
import {
  Nav,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <Nav>
      <ul className="navBar-list">
        {links.map((link) => (
          <li key={link.id} className="nav-list">
            <NavLink
              to={link.path}
              activeStyle={{
                textDecoration: 'underline',
              }}
              className="nav-page text-primary"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};
export default Navbar;
