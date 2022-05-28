import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
        <p>
          Compare My <span>LinkedIn</span>
        </p>
        <ul>
          <li>
            <Link to="/">Example</Link>
          </li>
          <li>
            <Link to="/dashboard">My Dashboard</Link>
          </li>
        </ul>
    </div>
  )
};

export default NavBar;