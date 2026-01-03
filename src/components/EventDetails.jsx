import React from 'react'
import './EventDetails.css'

const EventDetails = () => {
  return (
    <section id="event-details" className="event-details">
      <div className="container">
        <h2 className="section-title">Event Details</h2>
        <div className="details-grid">
          <div className="detail-card">
            <div className="card-icon">📅</div>
            <h3>Date & Time</h3>
            <p className="detail-text">January 24-25</p>
            <p className="detail-text">2026</p>
          </div>
          <div className="detail-card">
            <div className="card-icon">📍</div>
            <h3>Location</h3>
            <p className="detail-text">Main Campus Ground</p>
            <p className="detail-text">Open Sky Area</p>
          </div>
          <div className="detail-card">
            <div className="card-icon">👥</div>
            <h3>Participants</h3>
            <p className="detail-text">Free for All</p>
            <p className="detail-text">All MITS Students</p>
          </div>
          <div className="detail-card">
            <div className="card-icon">🔭</div>
            <h3>Equipment</h3>
            <p className="detail-text">5 Professional Telescopes</p>
            <p className="detail-text">Expert Volunteers</p>
          </div>
        </div>
        
        <div className="about-section">
          <div className="about-content">
            <h3 className="about-title">About Sky Watch 2026</h3>
            <p className="about-text">
              SkyWatch is an immersive outreach program by the Aerospace Club, designed to 
              bring the wonders of the universe to the MITS community through a blend of 
              technical workshops and deep-sky observation. Whether you are a seasoned 
              astrophotographer or someone experiencing the night sky for the first time, 
              this multi-day event—featuring a special collaboration with the Aryabhat 
              Foundation—aims to ignite scientific curiosity and inspire the next generation 
              of space enthusiasts.
            </p>
            <p className="about-text">
              With five professional-grade telescopes brought to campus, participants will 
              embark on a journey beyond the atmosphere, demystifying the cosmos and replacing 
              myths with scientific wonder.
            </p>
            <div className="highlight-box">
              <p className="highlight-text">
                <strong>Who Can Attend:</strong> This event is completely free and open to 
                all students of the college.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventDetails

