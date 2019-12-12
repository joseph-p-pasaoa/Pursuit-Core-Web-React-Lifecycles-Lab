/*
Joseph P. Pasaoa
Form Component | TodosToaster Lab
*/


/* IMPORTS */
import React from 'react';
import './Form.css';


/* MAIN */
const Form = (props) => {
  // handleChange = (e) => {
  //   this.setState({
  //       txtInput: e.target.value
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target[0].value);
  // }
  
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" id="txtInput" value={props.descriptionValue} onChange={props.handleChange} placeholder="New Todo Item" />
    </form>
  )
}


/* EXPORT */
export default Form;
