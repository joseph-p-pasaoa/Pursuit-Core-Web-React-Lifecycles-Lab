/*
Joseph P. Pasaoa
APP | Todos Toaster Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Form from './components/Form';
import TodosList from './components/TodosList';


/* MAIN */
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { idx: 0, description: "Finish BASIC lab" },
        { idx: 1, description: "Test of the Emergency Broadcast System" },
        { idx: 2, description: "Buy pasture-raised grass-fed cow's milk and organic strawberries for Fiona" },
        { idx: 3, description: "Pickup the bairn from grandma's"}
      ],
      nextIdx: 4,
      descriptionValue: ""
    }
  }

  componentDidMount() {
    toast(<>Copyright © 2019 by <strong>Joseph P. Pasaoa</strong>. All rights reserved.</>, {
      position: 'top-left',
      className: 'toastAuthor',
      autoClose: false,
      draggable: false
    });
  }

  popNotification = (operation, msg) => {
    toast(
      msg, 
      {
        className: 'toastStatic ' + operation,
        progressClassName: 'toastProgBar'
      });
  }

  handleDelete = (index) => {
    let workingTodosCopy = this.state.todos;
    workingTodosCopy[index] = null;
    this.setState({
        todos: workingTodosCopy
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { todos, nextIdx, descriptionValue } = this.state;
    if (descriptionValue && descriptionValue.trim()) {
      const newTodo = { idx: nextIdx, description: descriptionValue };
      const newTodos = todos.concat(newTodo);
      this.setState({
          todos: newTodos,
          nextIdx: nextIdx + 1,
          descriptionValue: ""
      });
    }
  }

  handleChange = (e) => {
    this.setState({ descriptionValue: e.target.value });
  }

  render() {
    const { todos, descriptionValue } = this.state;

    return (
      <div className="App">
        <div id="flex-base">
          <header>
            <h1>Todos Toaster</h1>
            <p id="about-me">Copyright © 2019 by Joseph P. Pasaoa. All rights reserved.</p>
          </header>
          <p id="instructions">fill out a new todo entry below and hit <strong>enter</strong> to submit</p>
          <Form 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
            descriptionValue={descriptionValue} 
          />
          <TodosList 
            popNotification={this.popNotification} 
            handleDelete={this.handleDelete} 
            todos={todos} 
          />
          <ToastContainer autoClose={11000} />
        </div>
      </div>
    );
  }
}


/* EXPORTS */
export default App;