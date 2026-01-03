import React from 'react'
import './Collaboration.css'

const Collaboration = () => {
  return (
    <section className="collaboration">
      <div className="container">
        <h2 className="section-title">Our Collaboration</h2>
        <div className="collaboration-content">
          <div className="collaboration-header">
            <h3 className="collaboration-name">Aryabhat Foundation, Bhopal</h3>
            <p className="collaboration-tagline">"Inculcating a Science-Based Temperament since 1995"</p>
          </div>
          
          <div className="collaboration-description">
            <p>
              We are proud to partner with the Aryabhat Foundation, a premier non-profit 
              organization dedicated to popularizing Astronomy and Basic Science. Based in 
              Bhopal, the Foundation has spent over 25 years demystifying the cosmos for the 
              younger generation, moving society away from superstition through authentic 
              scientific engagement.
            </p>
          </div>

          <div className="collaboration-achievements">
            <h4 className="achievements-title">Impact & Achievements:</h4>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">🌍</div>
                <h5>Global Excellence</h5>
                <p>Groomed students who have secured 4 Gold and 1 Silver Medal at the International Astronomy Olympiads.</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🇮🇳</div>
                <h5>National Outreach</h5>
                <p>Famous for the Aryabhat Astronomy Quiz, which has engaged thousands of students and sent winners to world-class observatories like Kodaikanal and Udaipur.</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🔭</div>
                <h5>Hands-on Learning</h5>
                <p>Specialized in telescope-aided sky observations, solar workshops, and NASA-recognized research projects.</p>
              </div>
            </div>
          </div>

          <div className="collaboration-message">
            <p>
              By bringing their expertise and professional-grade telescopes to our campus, 
              the Aryabhat Foundation ensures that Sky Watch 2026 will be more than just an 
              event—it will be a launchpad for future space explorers.
            </p>
            <a 
              href="https://aryabhat.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="visit-website-btn"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collaboration

