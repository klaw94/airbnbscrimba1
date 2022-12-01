import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='cardDiv'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
