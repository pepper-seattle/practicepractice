import React from 'react';
import './styles/Nav.css';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
  return(
    <div className="Nav-root">
      <nav>
        <ul className="Nav-list">
          <li>
            <NavLink to="/" className="Nav-options">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="Nav-options">Projects</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;