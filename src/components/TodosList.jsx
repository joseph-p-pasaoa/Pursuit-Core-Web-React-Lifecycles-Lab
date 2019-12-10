/*
Joseph P. Pasaoa
TodosList Component | TodosToaster Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodosList.css';


/* MAIN */
class TodosList extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return(
      <ul>
        <TodoItem />
        <TodoItem />
      </ul>
    )
  }
}


/* EXPORT */
export default TodosList;
