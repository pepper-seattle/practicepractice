import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './components/styles/App.css';
import Nav from './components/Nav';

import Home from './components/pages/Home';
import Error from './components/pages/Error';

import Projects from './components/pages/Projects';
import DrumKit from './components/pages/DrumKit';
import Practice from './components/pages/Practice';
import ToDo from './components/pages/ToDo';
import Reduxstagram from './components/pages/Reduxstagram';
import Single from './components/reduxstagram/Single';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-root">
          <Nav />
          <div className="App-wrapper">
            <Switch>
              <Route path="/" exact component={Home} />

              <Route exact path="/projects" component={Projects} />
              <Route path="/projects/drumkit" component={DrumKit} />
              <Route path="/projects/practice" component={Practice} />
              <Route path="/projects/todo" component={ToDo} />

              <Route exact path="/projects/reduxstagram" component={Reduxstagram} />
              <Route path="/view" component={Single} />

              {/* For when a path entered doesn't exist */}
              <Route component={Error}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
