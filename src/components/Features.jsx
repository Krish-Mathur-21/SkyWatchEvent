import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '📖',
      title: 'Magazine Launch',
      description: 'Official unveiling of aerospace magazine'
    },
    {
      icon: '🛍️',
      title: 'Interactive Stalls',
      description: 'Browse a variety of book, sticker, and food stalls'
    },
    {
      icon: '📸',
      title: 'Memory Lane',
      description: 'Capture the moment with Polaroid photos and creative standee frames'
    },
    {
      icon: '🎁',
      title: 'Rewards & Passes',
      description: 'Track your progress with official event passes and scan QR codes for gifts'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Event Extras: The Experience</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

