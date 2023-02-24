import React from 'react';
import './App.css';

import ToDoitem from './ToDO/ToDoitem'
import TodoData from './ToDO/TodoData'

function App() {

  const doneAddFun = (id) => {
    console.log('DONe',id)
  }

  const todoItems = TodoData.map(itemArr => {
    return (
      <ToDoitem
        key={todoDateArr._id}
        inpTextProps={todoDateArr.inpText}
        addDoneProps={() => { doneAddFun(todoDateArr._id) }}
      />
    )
  })

  return (
    <div className="App">
      {todoItems}

    </div>
  );
}
