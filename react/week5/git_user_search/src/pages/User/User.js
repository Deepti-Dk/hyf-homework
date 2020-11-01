import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    fetch(`https://api.github.com/user/${id}`)
      .then((req) => req.json())
      .then((result) => {
        setUserInfo(result);
      });
    // console.log('got id', id);
  }, [id]);

  return (
    <div className="main">
      {/* <img src={userInfo.avatar_url} alt="user-avatar" />
      <ul>
        <h1>{userInfo.name}</h1>
        <li>Followers: {userInfo.followers}</li>
        <li>Following: {userInfo.following}</li>
        <li>Repositories: {userInfo.public_repos}</li>
        <li>Location: {userInfo.location}</li>
      </ul>  */}
    </div>
  );
};
export default User;
