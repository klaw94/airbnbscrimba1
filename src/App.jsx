import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import zaferes from "./assets/zaferes.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='cardDiv'>
        <Card 
          img={zaferes} 
          statusButton="SOLD OUT" 
          grade={5.0} 
          nOfVotes={6} 
          country="USA"
          description="Life lessons with Katie Zaferes"
          price={168}
        />
        <Card 
          img={zaferes} 
          statusButton="SOLD OUT" 
          grade={5.0} 
          nOfVotes={6} 
          country="Spain"
          description="Life lessons with Katie Zaferes"
          price={168}
        />
        <Card 
          img={zaferes} 
          statusButton="SOLD OUT" 
          grade={5.0} 
          nOfVotes={6} 
          country="USA"
          description="Life lessons with Katie Zaferes"
          price={168}
        />        
      </div>
    </div>
  )
}

export default App
