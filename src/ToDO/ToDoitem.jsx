import React from "react";
import "./index.css";

const ToDoItemFun = (props) => {
  return (
    <div>
      <div className="container">
        <div className="todo_list">
          <h1>ToDo List</h1>

          <input type="text" className="inpTask " inpTextProps={props.inpText} />

          <button className="btnAdd btnstyle">add</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
