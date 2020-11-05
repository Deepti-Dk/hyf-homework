import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';

const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/user/${id}`)
      .then((req) => req.json())
      .then((result) => {
        console.log(result);
        setUserInfo(result);
      });
  }, [id]);

  if (userInfo === null) {
    return <p>'Loading...'</p>;
  }

  return (
    <div>
      <ul className="nav-bar">
        <li className="nav-bar-item">
          <Link to="/About" style={{ textDecoration: 'none', color: 'black' }}>
            About
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
        </li>
      </ul>
      <h1>Github User Details</h1>

      <div className="main-about">
        <img src={userInfo.avatar_url} alt="user-avatar" className="avatar" />
        <h1>{userInfo.name}</h1>
        <ul className="user-details">
          <li>
            <b>Followers: </b> {userInfo.followers}
          </li>
          <li>
            <b>Following: </b> {userInfo.following}
          </li>
          <li>
            <b>Repositories: </b> {userInfo.public_repos}
          </li>
          <li>
            <b>Location: </b> {userInfo.location}
          </li>
          <li>
            <b>Url: </b> <Link to={userInfo.url}> {userInfo.url} </Link>
          </li>
        </ul>
      </div>
      <footer className="footer">Developed by: Deepti Sharma</footer>
    </div>
  );
};
export default User;
