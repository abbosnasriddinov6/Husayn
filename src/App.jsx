import React, { useState } from 'react'
import Home from './components/Home'
import './App.css'
import { eatly, korzinka } from './assets'
import Dishes from './components/Dishes'
import Korzinka from './components/Korzinka'

import { NavLink, Route, Routes } from 'react-router-dom'
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'
const App = () => {

const [number,setnumber]=useState(0)
const [signin,setsignin]=useState('')

  return (
    <div className='app'>
    <Routes>
      <Route path='/home' element={<Home number={number}setnumber={setnumber}/>}/>
      <Route path='/dishes' element={<Dishes number={number}setnumber={setnumber}/>}/>
      <Route path='/korzinka' element={<Korzinka/>}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/' element={<Signup signin={signin} setsignin={setsignin}/>}/>
    </Routes>
    </div>
  )
}

export default App
