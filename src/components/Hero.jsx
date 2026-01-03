import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="club-name">AEROSPACE CLUB</span>
            <span className="event-name">SKY WATCH</span>
            <span className="event-year">2026</span>
          </h1>
          <p className="hero-subtitle">An Immersive Outreach Program by Aerospace Club</p>
          <p className="hero-description">
            SkyWatch brings the wonders of the universe to the MITS community through 
            technical workshops and deep-sky observation. Featuring a special collaboration 
            with the Aryabhat Foundation, this multi-day event aims to ignite scientific 
            curiosity and inspire the next generation of space enthusiasts.
          </p>
          <div className="hero-buttons">
            <a href="#register" className="btn-primary">
              Register Now
            </a>
            <a href="#event-details" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="telescope-icon">
            <div className="telescope-body"></div>
            <div className="telescope-lens"></div>
            <div className="stars-orbiting">
              <div className="star star-1"></div>
              <div className="star star-2"></div>
              <div className="star star-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

