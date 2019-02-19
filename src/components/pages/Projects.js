import React from 'react';
import '../styles/Projects.css';
import {NavLink} from 'react-router-dom';

export const styles = {
  
};

// TODO: Setup individual boxes for each project with a photo and description

export const Projects = () => {
  return(
    <div>
      <h1>What's Cookin'</h1>
      <NavLink exact to="/projects/drumkit" className="Projects-list">DrumKit</NavLink>
      <NavLink exact to="/projects/practice" className="Projects-list">Practice</NavLink>
      <NavLink exact to="/projects/reduxstagram" className="Projects-list">Reduxstagram</NavLink>
      <NavLink exact to="/projects/todo" className="Projects-list">To-Do List</NavLink>
    </div>
  );
};


export default Projects;