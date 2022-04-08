import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import {Form1} from './Pages/Form1'
import {Form2} from './Pages/Form2'
import { Users } from './Pages/User'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/registration/one' element={<Form1 />}></Route>
      <Route path='/registration/two' element={<Form2 />}></Route>
      <Route path='/users' element={<Users />}></Route>
    </Routes>
    </>
  )
}

export default App