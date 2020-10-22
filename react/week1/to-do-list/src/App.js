import React from 'react';
import logo from './logo.svg';
import './App.css';
import './toDo';
import ToDo from './toDo';
import heading from './toDoHeader';

const todo = [
  {
    activity: 'Get out of bed',
    date: 'Wed Sep 13 2017',
  },
  {
    activity: 'Brush teeth',
    date: 'Thu Sep 14 2017',
  },
  {
    activity: 'Eat breakfast',
    date: 'Fri Sep 15 2017',
  },
];

function App() {
  return (
    <div className="ToDo">
      {heading}
      {todo.map((item) => {
        return <ToDo activity={item.activity} date={item.date} />;
      })}
    </div>
  );
}
export default App;
