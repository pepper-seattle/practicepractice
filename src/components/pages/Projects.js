import React from 'react';
import {NavLink} from 'react-router-dom';

export const styles = {
  projects: {
    color: '#2C3646',
    fontSize: 24,
    marginLeft: 16,
    textDecoration: 'none',
  },
};

export const Projects = () => {
  return(
    <div>
      <NavLink exact to="/projects/drumkit" style={styles.projects}>DrumKit</NavLink>
    </div>
  );
};


export default Projects;