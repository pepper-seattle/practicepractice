import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navBase: {
    background: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '125px',
  },
  navTitle: {
    color: '#125688',
    fontFamily: 'Gloria Hallelujah',
    fontWeight: 300,
    fontSize: '60px',
    margin: '0 0 20px',
    textDecoration: 'none',
  },
};

export const Nav = () => {
  return(
    <div style={styles.navBase}>
      <Link to="/projects/reduxstagram" style={styles.navTitle}>Reduxstagram</Link>
    </div>
  )
}

export default Nav;