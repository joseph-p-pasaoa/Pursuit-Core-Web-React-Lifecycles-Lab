/*
Joseph P. Pasaoa
TodoItem Component | TodosToaster Lab
*/


/* IMPORTS */
import React from 'react';
import './TodoItem.css';


/* MAIN */
const TodoItem = (props) => {
  const { key, descriptionValue } = props;

  return(
    <li>
      <p className="description">{descriptionValue}</p>
      <button type="button" id="btnDel" onClick={() => {
          props.handleDelete(key);
      }}>x</button>
    </li>
  )
}


/* EXPORT */
export default TodoItem;
