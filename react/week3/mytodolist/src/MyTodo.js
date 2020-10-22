import React, { useState, useEffect } from 'react';
import './App.css';

const MyToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputDateValue, setInputDateValue] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: 'Get out of bed',
      deadline: '10 / 10 / 2020',
      status: true,
    },
    {
      id: 2,
      description: 'Brush teeth',
      deadline: '15 / 10 / 2020',
      status: true,
    },
    {
      id: 3,
      description: 'Eat breakfast',
      deadline: '20 / 10 / 2020',
      status: true,
    },
  ]);

  // useEffect(() => {
  //   fetch(
  //     'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
  //   )
  //     .then((results) => results.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [todos]);

  const addToDo = () => {
    let newId = Math.max(...todos.map((item) => item.id)) + 1;
    if (todos.length === 0) {
      newId = 0;
    }
    setTodos([
      ...todos,
      {
        id: newId,
        description: inputValue,
        deadline: inputDateValue,
        status: true,
      },
    ]);
    setInputValue('');
    setInputDateValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    let newTodo = todos.filter((item) => item.id === id).slice(1);

    // setTodos([...todos, setTodos {newTodo} ]);
    // setInputValue('');
    // setInputDateValue('');
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
    <div id="main" className="main-todo">
      <label>Todo description :</label>
      <input
        type="text"
        className="input-text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <br />
      <br />
      <label>Deadline: </label>
      <input
        type="date"
        className="input-text"
        onChange={(event) => {
          setInputDateValue(event.target.value);
        }}
        value={inputDateValue}
      />
      <br />
      <br />
      <button onClick={addToDo}>Add ToDo</button>

      <ol className="list">
        {todos.map((item) => (
          <li className="list-row" key={item.id}>
            <span className="description" data-toggled={!item.status}>
              {item.description} | {item.deadline} |
            </span>
            <input
              className="checkbox"
              type="checkbox"
              checked={!item.status}
              onChange={() => {
                toggleToDo(item.id);
              }}
            />
            <button
              className="delete-button"
              type="button"
              onClick={() => {
                deleteTodo(item.id);
              }}
            >
              Delete
            </button>
            <button
              className="edit-button"
              type="button"
              onClick={() => {
                // <a href="main" />;
                editTodo(item.id);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyToDo;
