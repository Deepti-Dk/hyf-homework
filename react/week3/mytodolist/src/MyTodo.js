import React, { useState, useEffect } from 'react';
import './App.css';

const MyToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputDateValue, setInputDateValue] = useState('');
  const [todos, setTodos] = useState([]);

  const [idEdit, setIdEdit] = useState(null);
  const [inputValueEdit, setInputValueEdit] = useState('');
  const [inputDateValueEdit, setInputDateValueEdit] = useState('');

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
    )
      .then((results) => results.json())
      .then((data) => {
        setTodos(
          data.map((item) => {
            return { ...item, status: true };
          })
        );
      });
  }, []);

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
            {item.id === idEdit ? (
              <span className="description">
                <input
                  type="text"
                  className="input-text"
                  value={inputValueEdit}
                  onChange={(event) => {
                    setInputValueEdit(event.target.value);
                  }}
                />
                <input
                  type="date"
                  className="input-text"
                  value={inputDateValueEdit}
                  onChange={(event) => {
                    setInputDateValueEdit(event.target.value);
                  }}
                />
              </span>
            ) : (
              <span className="description" data-toggled={!item.status}>
                {item.description} | {item.deadline} |
              </span>
            )}

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
                if (item.id === idEdit) {
                  setIdEdit(null);
                  setTodos(
                    todos.map((toDoItem) => {
                      if (toDoItem.id === idEdit) {
                        return {
                          ...toDoItem,
                          description: inputValueEdit,
                          deadline: inputDateValueEdit,
                        };
                      } else {
                        return toDoItem;
                      }
                    })
                  );
                } else {
                  setIdEdit(item.id);
                  setInputValueEdit(item.description);
                  setInputDateValueEdit(item.deadline);
                }
              }}
            >
              {item.id === idEdit ? 'Update' : 'Edit'}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyToDo;
