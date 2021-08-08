import React from 'react';
import { Container, StyledLi, Button } from './Style';
import style from './Style.module.css';

// contains a list of all the tasks
// takes the tasks as props and displays them in an unordered list
// makes use of Task.js for displaying individual tasks

const TaskList = (props) => {
  const handleCheck = (idx) => {
    props.onCheck(idx);
  }

  const handleDelete = (idx) => {
    props.onDelete(idx);
  }
  
  return (
    <Container>
      <ul>
        {props.tasks.map((task, index) => {
          let checkStatus;
          task.checked ? checkStatus = "checked" : checkStatus = "unchecked";
          return (
            <StyledLi key = {index}>
              <input type = "checkbox" onClick = { () => handleCheck(index) } checked = { task.checked } />
              <span className = {style[checkStatus]}>{ task.content }</span>
              <Button onClick = { () => handleDelete(index)}>X</Button>            
            </StyledLi>
          )
        })}
      </ul>
    </Container>
  );
};

export default TaskList;