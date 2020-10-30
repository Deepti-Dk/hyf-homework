import React from 'react';
import './App.css';
import GitUserSearch from './GitUserSearch';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ul className="nav-bar">
        <li className="nav-bar-item">
          <Link to="/user" style={{ textDecoration: 'none', color: 'black' }}>
            User
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            About
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
        </li>
      </ul>

      <div className="main">
        <h1>Github User Searcher</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/User" exact component={User} />
        </Switch>
        <GitUserSearch />
      </div>
    </Router>
  );
}

export default App;
