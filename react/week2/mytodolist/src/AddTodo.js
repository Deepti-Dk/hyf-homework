import React, { useEffect, useState } from 'react';
import './App.css';

const todos = [
  {
    id: 1,
    description: 'Get out of bed',
    status: true,
  },
  {
    id: 2,
    description: 'Brush teeth',
    status: true,
  },
  {
    id: 3,
    description: 'Eat breakfast',
    status: true,
  },
];

function addTask() {
  console.log('item added');
}
function handleClick() {
  todos.push();
}
const AddToDoButton = () => {
  const sayDefault = () => alert('Add a todo');
  const checkClick = InputToDo || sayDefault;
  return (
    <button type="button" onClick={checkClick}>
      Add a task
    </button>
  );
};

const InputToDo = () => {
  const sayDefault = () => alert('Add a todo');
  const checkInput = () =>
    document.querySelector('input').value !== ''
      ? sayDefault
      : document.querySelector('input').value;
  // return <input type="text" onChange={checkInput} />;
  // <label>
  //   <input type="text" />
  //   {/* value={value} onChange={onChangeInput} */}
  // </label>
};

const AddToDo = () => {
  const stateArray = useState('default');
  const state = stateArray[0];
  const setState = stateArray[1];

  return (
    <div>
      {/* <InputToDo /> */}
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
        value={state}
      />
      <AddToDoButton />
      <ol>
        {todos.map((item) => (
          <div>
            <li id="List-item" key={item.id}>
              {item.description}
            </li>
            <input id="checkbox" type="checkbox" />
            <button id="Delete-button" type="button">
              Delete
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default AddToDo;
