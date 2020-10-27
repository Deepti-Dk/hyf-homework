/**app.js */
import React from 'react';
import './App.css';
import Nav from './pages/nav';
import About from './pages/about';
import Home from './pages/home';
import User from './pages/user';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/**about.js */
import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <ul className="about-list">
        <h1> What is this?</h1>
        <li>
          A personal project built with React, and other tools to search users
          and view their profiles on Github. Nothing serious.
        </li>
        <li>
          <h1>Libraries and tools :</h1> React - React router{' '}
        </li>
      </ul>
    </div>
  );
};
export default About;

/**home.js */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `https://api.github.com/search/users?q=${query}`;
  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setUsers(data.items);
          setError(null);
        }
        setIsLoading(false);
      });
  }, [url, query]);
  return (
    <div>
      {error ? <h1>{error}</h1> : ''}

      <h1>Github User Searcher</h1>
      <input
        type="text"
        className="search"
        placeholder="Enter username"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {isLoading && <div>loading ...</div>}
      {query !== '' && users.length > 0 ? (
        <ul>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <img
                  src={user.avatar_url}
                  alt="user avatar"
                  id="search-user-image"
                />

                <Link to={`/user/${user.id}`} id="search-user-name">
                  {user.login}
                </Link>
              </div>
            );
          })}
        </ul>
      ) : (
        <div className="text">No users</div>
      )}
      <img
        src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
        alt="github-icon"
        id="github-icon"
      />
      <footer>Coded by : Nouha Najah</footer>
    </div>
  );
};
export default Home;

/**nav.js */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <i className="fa fa-github"></i>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;

/**user.js */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    fetch(` https://api.github.com/user/${id}`)
      .then((req) => req.json())
      .then((result) => {
        setUserInfo(result);
      });
  }, [id]);
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img
            src={userInfo.avatar_url}
            alt="user-avatar"
            className="user-avatar"
          />
        </div>
        <ul id="content">
          <h1>{userInfo.name}</h1>
          <li>Followers : {userInfo.followers}</li>
          <li> Following : {userInfo.following}</li>
          <li> Repos: {userInfo.public_repos}</li>
          <li> Location : {userInfo.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
