import React from 'react';
import './App.css';

import ToDoitem from './ToDO/ToDoitem'
import TodoData from './ToDO/TodoData'

function App() {

  const todoItems = TodoData.map(itemArr => {
    return (
      <ToDoitem
        key={itemArr._id}
        inpTextProps={itemArr.inpText}
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
