/*
Joseph P. Pasaoa
APP | Todos Toaster Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Form from './components/Form';
import TodosList from './components/TodosList';



/* MAIN */
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { description: "I Need a Test of the Emergency Broadcast System So That's on the Itinerary" },
        { description: "Buy pasture-raised organic milk. Whatever that is" },
        { description: "Pickup the bairn from grandma's"}
      ],
      descriptionValue: ""
    }
  }

  handleDelete = (index) => {
    let updatedTodos = this.state.todos;
    updatedTodos.splice(index, 1);
    this.setState({
        todos: updatedTodos
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { todos, descriptionValue } = this.state;
    if (descriptionValue && descriptionValue.trim()) {
      const newDesc = { description: descriptionValue };
      const newTodos = todos.concat(newDesc);
      this.setState({
          todos: newTodos,
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
          </header>
          <p id="instructions">fill out a new todo entry below and hit <strong>enter</strong> to submit</p>
          <Form 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
            descriptionValue={descriptionValue} 
          />
          <TodosList 
            handleDelete={this.handleDelete} 
            todos={todos} 
          />
        </div>
      </div>
    );
  }
}


/* EXPORTS */
export default App;
