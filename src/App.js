/*
Joseph P. Pasaoa
APP | Todos Toaster Lab
*/


/* IMPORTS */
import React from 'react';
import './App.css';
import Form from './components/Form';
import TodosList from './components/TodosList';



/* MAIN */
function App() {
  return (
    <div className="App">
      <div id="flex-base">
        <Form />
        <TodosList />
      </div>
    </div>
  );
}


/* EXPORTS */
export default App;
