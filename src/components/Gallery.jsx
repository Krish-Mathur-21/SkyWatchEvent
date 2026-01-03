import React from 'react'
import './Gallery.css'
import image1 from '../assets/image (1).jpeg'
import image2 from '../assets/image (2).jpeg'
import image3 from '../assets/image (3).jpeg'
import image4 from '../assets/image (4).jpeg'
import image5 from '../assets/image (5).jpeg'
import image6 from '../assets/image (6).jpeg'
import image7 from '../assets/image (7).jpeg'

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="gallery-title">Glimpses of SKY WATCH 1.0</h2>
        <p className="gallery-description">
          Explore our aerospace journey through stunning visuals and memorable moments
        </p>
        <div className="gallery-wrapper">
          <div className="gallery-grid gallery-flow">
            {duplicatedImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image} 
                  alt={`Sky Watch 1.0 Event ${(index % images.length) + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

