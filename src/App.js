import React from 'react';
import './App.css';
import ToDoItemFun from './ToDO/ToDoitem'
import todoDateArr from './ToDO/TodoData'
import Input from './ToDO/InputTodo'

function App() {

  

  const doneAddFun = (id) => {
    console.log('DONE',id)
  }

  

  const todoItems = todoDateArr.map(itemArr => {
    return (
      <ToDoItemFun
        key={itemArr._id}
        inpTextProps={itemArr.inpText}
        funAddDoneProps={() => { doneAddFun(itemArr._id) }}
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
