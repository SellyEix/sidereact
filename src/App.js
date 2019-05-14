import React, { Component } from 'react';

import { NavLink, HashRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Love from './love.js';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/Love' exact component={Love} />
        </Router>
      </div>
    );
  }
}

export default App;
