import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards';
import CardMenu from './components/CardMenu';
import Testimony from './components/Testimony';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>
          <Navbar />
          <Hero />
          <HeadlineCards />
          <CardMenu />
          <Testimony />
          <Footer />
      </div>
    </>
  )
}

export default App
