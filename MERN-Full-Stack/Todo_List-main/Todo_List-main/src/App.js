import React, { useEffect, useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  // deconstruct the existing tasks array
  // add the newly created task at the end of the array
  // passed the new array to the setTasks function
  const addTask = ( task ) => {
    const newList = [...tasks, task];
    setTasks(newList);
  };

  // removed the selected task from the array of tasks
  const removeTask = ( idx ) => {
    const newList = tasks.filter( (task, i) => i !== idx );
    setTasks(newList);
  };

  const checkOrUncheck = ( idx ) => {
    let newCheckState = !tasks[idx].checked;
    let newList = [...tasks];
    newList[idx].checked = newCheckState;
    setTasks(newList);
  }

  // use localStorage to prevent the data from being lost on page refresh
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className = "App">
      <header className = "App-header">
        To Do List 
        <TaskList tasks = { tasks } onDelete = { removeTask } onCheck = { checkOrUncheck }/>
        <AddTaskForm addTask = { addTask } />
      </header>
    </div>
  );
}

export default App;
