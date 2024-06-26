import React from 'react'
import { auth } from '../../config/firebase'
import { db } from '../../config/firebase'
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'  
import { useState, useEffect } from 'react'

import ToDoItem from './ToDoItem'

const ToDoList = () => {

  const [toDoList, setToDoList] = useState([])
  const [newItemTitle, setNewItemTitle] = useState('')
  const [newItemTime, setNewItemTime] = useState('')

  const [updatedTime, setUpdatedTime] = useState('')

  const toDoRef = collection(db, 'todolist')

  

  const getToDoList = async () => {
    try{
        const data = await getDocs(toDoRef)
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        
        console.log(auth?.currentUser?.email)
        console.log(filteredData)
        setToDoList(filteredData)
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    getToDoList()
  },[])

const addItem = async () => {
    try{
        await addDoc(toDoRef, {
            title: newItemTitle,
            time: newItemTime,
            userId: auth?.currentUser?.uid,
        })

        getToDoList()
    } catch (err) {
        console.log(err)
    }
}  

const updateItem = async (itemId, updatedTime) => {
    try{
        const itemDocRef = doc(db, 'todolist', itemId)
        await updateDoc(itemDocRef, {
            time: updatedTime
        })

        getToDoList()
    } catch (err) {
        console.log(err)
    }
}


const deleteItem = async (itemId) => {
    try{
        const itemDocRef = doc(db, 'todolist', itemId)
        deleteDoc(itemDocRef)

        getToDoList()
    } catch (err) {
        console.log(err)
    }
}


  return (
    <div>
        <div className='flex justify-center m-4 space-x-6'>
            <div className='space-x-6'>
                <input 
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    type='text' 
                    placeholder='New Item Title' 
                    className=' w-[185px] rounded-md p-3 active:border-orange-400
                    active:outline-none active:ring-1 active:ring-orange-400
                    focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400'
                />
                <input 
                    onChange={(e) => setNewItemTime(e.target.value)}
                    type='text' 
                    placeholder='New Item Time' 
                    className=' w-[185px] rounded-md p-3 active:border-orange-400
                    active:outline-none active:ring-1 active:ring-orange-400
                    focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400'
                />
            </div>
            <div>
                <button className='bg-orange-400 p-1 rounded-lg w-32 h-12' onClick={addItem}>
                    Add
                </button>
            </div>
        </div>
        
        
        <div className="flex justify-center items-center">
        <div className="bg-orange-200 w-[552px] h-[600px] flex flex-col rounded-md">
                {toDoList.map((toDoItem) => (
                    <ToDoItem 
                        key={toDoItem.id}
                        toDoItem={toDoItem}
                        updatedTime={updatedTime}
                        setUpdatedTime={setUpdatedTime}
                        updateItem={updateItem}
                        deleteItem={deleteItem}
                    />
                ))}
        </div>  
        </div>
    </div>
  )
}

export default ToDoList