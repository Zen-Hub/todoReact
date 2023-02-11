import React from "react";
import './index.css'

const toDoBase = [
    {
    _id:1,
    name: 'GO BALI',
    isChecked: true
    },
    {
    _id:2,
    name: 'TAKE MANY',
    isChecked: true
    }

]

const toDo =()=>{
    return(
        [1,2,3,4,5].map(todo => <ToDoItem />)
    )
}

export default ToDo