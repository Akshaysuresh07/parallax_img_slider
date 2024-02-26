import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Paralax from './components/Paralax'
import About from './components/About'
import Foods from './components/Foods'
import Paralax2 from './components/paralax2'
import Slider from './components/Slider'

function App() {


  return (
    <>
   <Header/>
      <Paralax/>
    <Foods/>
    <Paralax2/>
    <Slider/>
     <Footer/>
    </>
  )
}

export default App
