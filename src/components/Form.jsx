/*
Joseph P. Pasaoa
Form Component | TodosToaster Lab
*/


/* IMPORTS */
import React from 'react';
// import './Form.css';


/* MAIN */
class Form extends React.Component {
  constructor() {
    super();
    this.initialState = {
      txtInput: ""
    }
    this.state = this.initialState;
  }

  handleChange = (e) => {
    this.setState({
        txtInput: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  }

  render() {
    const { txtInput } = this.state;
    return (
      <>
      <header>
        <h1>Todos Toaster</h1>
      </header>
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="txtInput" value={txtInput} onChange={this.handleChange} />
      </form>
      </>
    )
  }
}


/* EXPORT */
export default Form;
