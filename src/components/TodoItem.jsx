/*
Joseph P. Pasaoa
TodoItem Component | TodosToaster Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './TodoItem.css';


/* MAIN */
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount = () => {
    this.props.popNotification("delete", <><strong>Todo deleted:</strong> {this.props.description}</>)
  }

  render() {
    const { idx, description } = this.props;
    return (
      <li>
        <p className="description">{description}</p>
        <button type="button" id="btnDel" onClick={() => {
            this.props.handleDelete(idx);
        }}>x</button>
      </li>
    );
  }
}


/* EXPORT */
export default TodoItem;
