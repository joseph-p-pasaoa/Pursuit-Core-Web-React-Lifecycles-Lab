/*
Joseph P. Pasaoa
TodosList Component | TodosToaster Lab
*/


/* IMPORTS */
import React from 'react';
import TodoItem from './TodoItem';
// import './TodosList.css';


/* MAIN */
class TodosList extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return(
      <ul>
        <TodoItem />
      </ul>
    )
  }
}


/* EXPORT */
export default TodosList;
