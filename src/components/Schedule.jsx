import React from 'react'
import './Schedule.css'

const Schedule = () => {
  const dayActivities = [
    {
      time: 'Day Activity',
      title: 'Solar Activity Workshop',
      description: 'A 30-minute expert presentation at the Conclave Hall followed by a 60-minute live solar observation session under the open sky.'
    },
    {
      time: 'Day Activity',
      title: 'Space Movie Show',
      description: '20-minute screenings of captivating space-science films.'
    },
    {
      time: 'Day Activity',
      title: 'School Outreach',
      description: 'Special sessions hosted specifically for visiting school students.'
    }
  ]

  const nightActivities = [
    {
      time: 'Night Activity',
      title: 'The Stargazing Session',
      description: 'Experience the cosmos through 5 professional telescopes guided by expert volunteers.'
    },
    {
      time: 'Night Activity',
      title: 'Observe Celestial Targets',
      description: 'Observe the Moon, Jupiter, Saturn, Venus, the Pleiades, and the Orion constellation.'
    },
    {
      time: 'Night Activity',
      title: 'Visual Learning',
      description: 'Live explanations using projectors to showcase star maps, constellation diagrams, and educational clips.'
    },
    {
      time: 'Night Activity',
      title: 'Cosmic Storytelling',
      description: 'Engaging narratives that bring the history and mythology of the stars to life.'
    }
  ]

  const scheduleItems = [...dayActivities, ...nightActivities]

  return (
    <section id="schedule" className="schedule">
      <div className="container">
        <h2 className="section-title">Event Schedule & Activities</h2>
        <div className="schedule-sections">
          <div className="schedule-section">
            <h3 className="schedule-section-title">Day Activity: Solar & Cinema</h3>
            <div className="schedule-timeline">
              {dayActivities.map((item, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-time">{item.time}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="schedule-section">
            <h3 className="schedule-section-title">Night Activity: The Stargazing Session</h3>
            <div className="schedule-timeline">
              {nightActivities.map((item, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${(index + dayActivities.length) * 0.1}s` }}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-time">{item.time}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule

