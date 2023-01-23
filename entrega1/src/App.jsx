import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemContainer from './components/paginas/ItemContainer'

function App() {
 

  return (
    <>
   <Navbar/>
   <ItemContainer saludo='greeting'/>
   </>
  )
}

export default App
