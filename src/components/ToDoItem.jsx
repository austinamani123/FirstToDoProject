import React from 'react'
import { TiEdit } from 'react-icons/ti'


const ToDoItem = ({toDoItem}) => {
  return (
    <>
    <div className="border-b-2 border-white p-4 flex justify-between">
      <div>
        <h1>{toDoItem.title}</h1>
        <p>{toDoItem.time}</p>
      </div>
      <div className='mt-4'>
        <TiEdit />
      </div>
    </div>
    </>
  )
}

export default ToDoItem