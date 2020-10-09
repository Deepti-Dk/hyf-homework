import React, { useEffect, useState } from 'react';
import './App.css';

const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
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
  ]);

  const addToDo = () => {
    const newId = Math.max(...todos.map((item) => item.id)) + 1;
    setTodos([...todos, { id: newId, description: inputValue, status: true }]); //parameter spread
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <button onClick={addToDo}>Add ToDo</button>

      <ol>
        {todos.map((item) => (
          <li key={item.id}>
            <span id="List-item">{item.description}</span>
            <input id="checkbox" type="checkbox" />
            <button id="Delete-button" type="button">
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AddToDo;
