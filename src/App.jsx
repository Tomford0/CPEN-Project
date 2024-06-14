import React from 'react'
import './App.css'
import Navbar from './Navbar'
import AppRouter from './router/AppRouter'

function App(){
  return(
    <div className='main'>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App