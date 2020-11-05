import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'use-debounce';
import { Link } from 'react-router-dom';
import '../../App.css';
import img from '../../images/github.png';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const myRef = useRef();

  const onChange = (e) => {
    setSearchValue(e.target.value);
    setLoading(true);
  };

  useEffect(() => {
    if (debouncedSearchValue !== '') {
      fetch(`https://api.github.com/search/users?q=${debouncedSearchValue}`) //debouncing-to deal with api time-outs
        .then((results) => {
          if (results.ok) {
            setError(false);
            return results.json();
          } else {
            setError(true);
          }
        })
        .then((data) => {
          console.log(data.items);
          setLoading(false);
          setSearchResults(data.items);
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (myRef && myRef.current) {
      myRef.current.focus();
    }
  }, [myRef]);

  return (
    <div>
      <ul className="nav-bar">
        <li className="nav-bar-item">
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            About
          </Link>
        </li>
      </ul>
      <h1>Github User Searcher</h1>
      <img className="git-image" src={img} alt="" />
      <br />
      <br />
      <input
        ref={myRef}
        type="text"
        className="input-text"
        placeholder="Search..."
        onChange={onChange}
        value={searchValue}
      />

      <div>
        {loading === true && <p>Loading...</p>}
        {error === true && <p>Error loading...</p>}
        <ul>
          {!error &&
            searchResults.map((user) => {
              return (
                <li key={user.id} className="user">
                  <Link to={`/user/${user.id}`} id="search-user-name">
                    <img
                      className="user-img"
                      src={user.avatar_url}
                      alt="user avatar"
                      id="search-user-image"
                    />
                    <span className="user-name">{user.login}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
        {!error && searchValue !== '' && searchResults.length === 0 && (
          <p>No users found...</p>
        )}
      </div>
      <footer className="footer">Developed by: Deepti Sharma</footer>
    </div>
  );
};

export default Home;
