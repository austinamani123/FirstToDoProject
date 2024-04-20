import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase' 

const Navbar = () => {

  const logOut = async () => {
    try{
        await signOut(auth)
    } catch (err) {
        console.log(err)
    }
  }  

  return (
    <div className="flex mx-8 my-6 justify-between">
        <Link to='/' className="text-2xl">Home</Link>
        <ul className="flex space-x-12">
            <li>
                <Link to="/signin" className="text-2xl">Sign In</Link>
            </li>
            <li>
                <Link to="signup" className="text-2xl">Sign Up</Link>
            </li>
            <li>
                <Link to="/" onClick={logOut} className="text-2xl">Logout</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar