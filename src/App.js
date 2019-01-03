import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';

import Home from './components/pages/Home';
import Error from './components/pages/Error';

import Projects from './components/pages/Projects';
import DrumKit from './components/pages/DrumKit';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/drumkit" component={DrumKit} />

            {/* For when a path entered doesn't exist */}
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
