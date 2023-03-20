import React from "react";
import "./index.css";

const ToDoItemFun = (props) => {
  return (
    <div>
      
      <div className="allTask">
        

        <div className="taskText">{props.inpTextProps}</div>
        <button className="done btnstyle" onClick={props.funAddDoneProps}>done</button>
        <button className="delete btnstyle">delete</button>
      </div>
    </div>
  );
};

export default ToDoItemFun;
