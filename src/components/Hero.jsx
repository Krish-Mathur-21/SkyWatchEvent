import React from 'react'
import './Hero.css'
import videoSrc from '../assets/Video.mp4'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="club-name">AEROSPACE CLUB</span>
            <span className="event-name">SKY WATCH 2.0</span>
            <span className="event-year">2026</span>
          </h1>
          <p className="hero-subtitle">An immersive astronomy experience by the Aerospace Club</p>
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
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

