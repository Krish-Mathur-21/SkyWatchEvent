import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Is the event free?',
      answer: 'Yes, it is free for all students of our college.'
    },
    {
      question: 'Do I need a telescope?',
      answer: 'No! We provide five high-quality telescopes for all participants.'
    },
    {
      question: 'What if it\'s cloudy?',
      answer: 'We have indoor technical sessions and film screenings planned as backup.'
    },
    {
      question: 'Can I bring my own camera?',
      answer: 'Absolutely. We encourage lunar and solar photography!'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">FAQ Section</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

