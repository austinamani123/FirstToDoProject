import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../config/firebase'
import { Link } from 'react-router-dom'

export const SignUp = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

console.log(auth?.currentUser?.email)

const signUp = async () => {
    try{
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.log(err)
    }
}

  return (
    <div className="flex items-center justify-center h-[618px]">
      <div className="flex flex-col w-[512px] h-[550px] bg-slate-100 rounded-lg shadow-lg">
        
          <label className="mt-12 mb-2 ml-6">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email..." className="w-[460px] rounded-md mb-4 ml-6 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400"/>

          <label className="mb-2 ml-6">Password</label>
          <input  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password..." className="w-[460px] rounded-md mb-4 ml-6 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400"/>

          <button onClick={signUp} className="bg-orange-400 w-[460px] mt-7 rounded-lg p-3 text-md ml-6">
            <Link to='/todolist'>Sign Up</Link>
          </button>
        
      </div>
    </div>
  )
}

export default SignUp