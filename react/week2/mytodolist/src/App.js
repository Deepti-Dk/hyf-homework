import React from 'react';
import './App.css';
import Timer from './Timer.js';
import AddToDo from './AddTodo.js';

const App = () => {
  return (
    <div className="MyToDo">
      <h1>My To Do List</h1>
      <Timer />
      <AddToDo />
    </div>
  );
};

export default App;
