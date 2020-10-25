import React from 'react';
import './App.css';
import Timer from './Timer.js';
import MyToDo from './MyTodo.js';

const App = () => {
  return (
    <div className="MyToDo">
      <h1>My To Do List</h1>
      <Timer />
      <MyToDo />
    </div>
  );
};

export default App;
