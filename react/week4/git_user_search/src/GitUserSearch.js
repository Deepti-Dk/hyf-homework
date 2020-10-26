import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const GitUserSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const myRef = useRef();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchValue}`)
      .then((results) => results.json())
      .then((data) => {
        console.log(data.login);
      });

    if (myRef && myRef.current) {
      myRef.current.focus();
    }
  }, [myRef, searchValue]);

  return (
    <div>
      <input
        ref={myRef}
        type="text"
        className="input-text"
        placeholder="Search..."
        onChange={onChange}
        value={searchValue}
      />
      <div>
        <p>{searchValue} </p>
      </div>
    </div>
  );
};

export default GitUserSearch;
