/*
Joseph P. Pasaoa
APP | Todos Toaster Lab
*/


/* IMPORTS */
import React from 'react';
import Form from './components/Form';
import TodosList from './components/TodosList';

import './App.css';


/* MAIN */
function App() {
  return (
    <div className="App">
      <Form />
      <TodosList />
    </div>
  );
}


/* EXPORTS */
export default App;
