import React from 'react';
import './styles/Main.css';

import Nav from './Nav';
import PhotoGrid from './PhotoGrid';

export class Main extends React.Component {
  render(){
    return(
      <div className="Main-root">
        <Nav />
        <div className="Main-body">
          <PhotoGrid {...this.props}/>
        </div>
      </div>
    )
  }
}

export default Main;