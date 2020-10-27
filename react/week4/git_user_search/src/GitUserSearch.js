import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'use-debounce';
import './App.css';
import img from './images/github.png';

const GitUserSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);

  const myRef = useRef();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchValue !== '') {
      fetch(`https://api.github.com/search/users?q=${debouncedSearchValue}`) //debouncing-to deal with api time-outs
        .then((results) => results.json())
        .then((data) => {
          setSearchResults(data.items.map((user) => user.login));
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
        <ul>
          {searchResults.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GitUserSearch;
