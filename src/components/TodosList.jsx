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
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const prevTodos = prevProps.todos;
    const currTodos = this.props.todos;
    if (currTodos.length > prevTodos.length) {
      const newTodoDesc = currTodos[currTodos.length - 1].description;
      this.props.popNotification("add", <><strong>New Todo Created:</strong> {newTodoDesc}</>);
    }
  }

  render() {
    const todoCards = this.props.todos.filter(el => !!el)
      .map(todo => {
          return (
            <TodoItem 
              key={todo.idx} 
              idx={todo.idx} 
              popNotification={this.props.popNotification} 
              handleDelete={this.props.handleDelete} 
              description={todo.description} 
            />
          );
    });

    return (
      <ul>
        {todoCards}
      </ul>
    );
  }
}


/* EXPORT */
export default TodosList;
