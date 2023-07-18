import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { io } from "socket.io-client";
import Login from './components/Login'
import Chat from './components/Chat'
function App() {

  const socket = io("ws://localhost:4000");


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat socket={socket}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
