import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import { auth } from "../config/firebase";
import ToDoList from "./components/ToDoList";

function App(){

    console.log(auth?.currentUser?.email)

    return(
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/signUp' element={<SignUp />}/>
            <Route path='/signIn' element={<SignIn />}/>
            <Route path='/todolist' element={<ToDoList/>}/>
        </Routes>
    )
}

export default App