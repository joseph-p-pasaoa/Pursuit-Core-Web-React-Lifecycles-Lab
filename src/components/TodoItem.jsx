/*
Joseph P. Pasaoa
TodoItem Component | TodosToaster Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './TodoItem.css';


/* MAIN */
class TodoItem extends Component {
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
        <p className="todoValue">Test This is a Test of the Emergency Broadcast System{value}</p>
        <button type="button" id="btnDel" onClick={this.handleClick}>x</button>
      </li>
    )
  }
}


/* EXPORT */
export default TodoItem;
