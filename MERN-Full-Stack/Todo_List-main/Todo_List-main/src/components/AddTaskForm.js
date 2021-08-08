import React, { useState } from 'react';
import { Button } from './Style';

// allows creating to-do list tasks
// has a form with an input field which will allow the user to ented a new task
// it also has a button which will add the task to the list
// this function will be invoked whenever the user clicks the add task button
// it will also clear out the text box after adding the task to the list
// uses state to store the task as the user types in the input text field

const AddTaskForm = (props) => {
  const emptyTask = {content: "", checked: false};
  const [task, setTask] = useState(emptyTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(task);
    setTask(emptyTask);
  };

  return (
    <div>
      <p>Add task</p>
      <form onSubmit = { handleSubmit } >
        <input type = "text" onChange = { (e) => setTask({content: e.target.value, checked: false}) } value = { task.content } />
        <Button>Add Task</Button>
      </form>
    </div>
  )
}

export default AddTaskForm;