import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards';
import CardMenu from './components/CardMenu';

function App() {

  return (
    <>
      <div>
          <Navbar />
          <Hero />
          <HeadlineCards />
          <CardMenu />
      </div>
    </>
  )
}

export default App
