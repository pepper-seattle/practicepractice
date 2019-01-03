import React from 'react';
import {BrowserRouter as Link, Router} from 'react-router-dom';

//TODO: Implement JSS to allow for hover styles
export const styles = {
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  root: {
    backgroundColor: '#414a58',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 50,
    marginTop: 10,
    padding: '5px 10px',
  },
};

export const MenuItem = ({linkTo, name}) => {
  return(
    <Router>
      <div style={styles.root}>
        <Link to={linkTo} style={styles.name}>{name}</Link>
      </div>
    </Router>
  )
};

export default MenuItem;