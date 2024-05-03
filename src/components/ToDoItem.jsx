import React from 'react'
import { TiEdit } from 'react-icons/ti'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const ToDoItem = ({toDoItem, updatedTime, setUpdatedTime, updateItem, deleteItem}) => {

  const [accordionOpen, setAccordionOpen] = useState(false)

  const handleClick = () => {
    updateItem(toDoItem.id, updatedTime)
    setAccordionOpen(false);
}

  const handleInputChange = (e) => {
    setUpdatedTime(e.target.value)
  }

  return (
    <>
    <div className="border-b-2 border-white p-4 flex justify-between">
      <div>
        <h1>{toDoItem.title}</h1>
        <p>{toDoItem.time}</p>
      </div>
      <div className='mt-4 flex space-x-3' >
        <TiEdit onClick={() => setAccordionOpen(!accordionOpen)}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=> deleteItem(toDoItem.id)}/> 
      </div>
    </div>
    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
      accordionOpen ? 'grid-rows-[1fr] opacity-100 p-5 border-white border-b-2 ' : 'grid-rows-[0fr] opacity-0'
    }`}>
      <div className='overflow-hidden'>
        <input
          value={updatedTime} 
          onChange={handleInputChange}
          placeholder='Change time' 
          className='rounded-md w-40 focus:border-orange-400 
          focus:ring-orange-400'/>
        <button onClick={handleClick} className='bg-orange-400 p-1 rounded-lg w-32 h-11 ml-48'>
          Make changes
        </button>  
      </div>
    </div>
    </>
  )
}

export default ToDoItem