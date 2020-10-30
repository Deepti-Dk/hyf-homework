import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch('https://localhost:3001/api/user/1');
  //   console.log('got id', id);
  // }, [id]);

  // return <div>This is my user with id: ${id}</div>;
  return (
    <div>
      <p>This is my USER page</p>
    </div>
  );
};
export default User;
