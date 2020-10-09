import React, { useState } from 'react';
import './App.css';

//prop-parameter for component(which is a func)

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
    let newId = Math.max(...todos.map((item) => item.id)) + 1;
    if (todos.length === 0) {
      newId = 0;
    }
    setTodos([...todos, { id: newId, description: inputValue, status: true }]); //parameter spread

    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleToDo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: !item.status,
          };
        } else {
          return item;
        }
      })
    );
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
            <span className="description" data-toggled={!item.status}>
              {item.description}
            </span>
            <input
              type="checkbox"
              checked={!item.status}
              onChange={() => {
                toggleToDo(item.id);
              }}
            />
            <button
              type="button"
              onClick={() => {
                deleteTodo(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AddToDo;
