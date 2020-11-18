import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function About() {
  return (
    <div>
      <ul className="nav-bar">
        <li className="nav-bar-item">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
        </li>
      </ul>

      <div className="main-about">
        <h1>What is GitHub Search!</h1>
        <p>
          As the name says, GitHub Search is used to search for GitHub Users.
          <br />
          It also provides a profile overview for the selected user.
        </p>
        <h2>Technologies Used:</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <footer className="footer">Developed by: Deepti Sharma</footer>
    </div>
  );
}

export default About;
