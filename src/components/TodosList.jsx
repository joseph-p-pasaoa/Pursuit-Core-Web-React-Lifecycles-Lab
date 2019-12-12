/*
Joseph P. Pasaoa
TodosList Component | TodosToaster Lab
*/


/* IMPORTS */
import React from 'react';
import TodoItem from './TodoItem';
import './TodosList.css';


/* MAIN */
const TodosList = (props) => {
  const todoCards = props.todos.map((todo, index) => {
      return (
        <TodoItem 
          key={index} 
          handleDelete={props.handleDelete} 
          description={todo.description} 
        />
      );
  })

  return (
    <ul>
      {todoCards}
    </ul>
  )
}


/* EXPORT */
export default TodosList;
