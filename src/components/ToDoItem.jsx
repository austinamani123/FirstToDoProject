import React from 'react'

const ToDoItem = ({toDoItem}) => {
  return (
    <>
    <div className="border-b-2 border-white p-4 ">
      <h1>{toDoItem.title}</h1>
      <p>{toDoItem.time}</p>
    </div>
    </>
  )
}

export default ToDoItem