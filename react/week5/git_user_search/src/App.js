import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/User/:id" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
