import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from "./data"

function App() {
  const cardElement = data.map(
    (card)=>(
      <Card 
        key={card.id}
        id={card.id}
        img={card.coverImg} 
        statusButton={card.status} 
        grade={card.stats.rating} 
        nOfVotes={card.stats.reviewCount} 
        country={card.country}
        title={card.title}
        price={card.price}
      />
    )
  )
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='cardDiv'>
        {cardElement}
      </div>
    </div>
  )
}

export default App
