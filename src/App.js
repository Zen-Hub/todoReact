import React from 'react';
import './App.css';
import ToDoItemFun from './ToDO/ToDoitem'
import todoDateArr from './ToDO/TodoData'

function App() {

  const doneAddFun = (id) => {
    console.log('DONe',id)
  }

  const todoItems = todoDateArr.map(itemArr => {
    return (
      <ToDoItemFun
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

export default App;

