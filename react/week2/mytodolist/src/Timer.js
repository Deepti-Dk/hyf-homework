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
  return <div>You have used {value} seconds on this website</div>;
};

export default Timer;
