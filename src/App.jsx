import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Features from './components/Features'
import Schedule from './components/Schedule'
import Collaboration from './components/Collaboration'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="stars-background"></div>
      <Header />
      <Hero />
      <EventDetails />
      <Features />
      <Schedule />
      <Collaboration />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

