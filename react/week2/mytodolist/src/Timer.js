import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setValue(value + 1);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, [value]);
  return <div className="timer">You have used <strong>{value}</strong> seconds on this website</div>;
};

export default Timer;
