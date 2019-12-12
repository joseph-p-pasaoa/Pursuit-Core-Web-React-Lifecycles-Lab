/*
Joseph P. Pasaoa
Form Component | TodosToaster Lab
*/


/* IMPORTS */
import React from 'react';
import './Form.css';


/* MAIN */
const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" id="txtInput" value={props.descriptionValue} onChange={props.handleChange} placeholder="New Todo Item" />
    </form>
  );
}


/* EXPORT */
export default Form;
