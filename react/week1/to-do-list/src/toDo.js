import React from 'react';

const ToDo = (props) => {
  return (
    <div className="displaydata">
      <strong>Activity:</strong> {props.activity}
      <br />
      <strong>Date:</strong> {props.date}
      <br />
    </div>
  );
};

export default ToDo;
