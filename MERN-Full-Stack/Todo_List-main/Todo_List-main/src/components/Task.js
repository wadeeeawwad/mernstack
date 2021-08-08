import React from 'react';
import { Button } from './Style';

// takes the task as a prop and displays it
const Task = ({ task, removeTask }) => {
  return (
    <div>
      <span>{ task.content }</span>
      <Button onClick = {() => removeTask(task)}>X</Button>
    </div>
  );
};

export default Task;