/*
Joseph P. Pasaoa
TodoItem Component | TodosToaster Lab
*/


/* IMPORTS */
import React from 'react';
// import './TodoItem.css';


/* MAIN */
class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
  }

  handleClick = (e) => {
    console.dir(e.target.parentNode);
  }

  render() {
    const { value } = this.state;
    return(
      <li>
        <p>{value}</p>
        <button type="button" id="btnDel" onClick={this.handleClick}>-</button>
      </li>
    )
  }
}


/* EXPORT */
export default TodoItem;
