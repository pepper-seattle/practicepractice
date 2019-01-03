import React from 'react';
import {NavLink} from 'react-router-dom';

export const styles = {
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
  },
  navOptions: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 16,
    textDecoration: 'none',
  },
  root: {
    backgroundColor: '#2C3646',
    display: 'flex',
    width: '100%',
    height: 72,
  },
};

export const Nav = () => {
  return(
    <div style={styles.root}>
      <nav>
        <ul style={styles.navList}>
          <li>
            <NavLink to="/" style={styles.navOptions}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={styles.navOptions}>Projects</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;