import React from 'react'
import schedule from '../json/schedule'

//import './scheduleCard.css';

const ScheduleCard = props => {
  const headers = Object.getOwnPropertyNames(schedule[0])

  return (
    <div className="schedule">
      <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr 3fr` }}>
        {headers.map(label => (
          <h4 key={label} className="s-head">
            {label}
          </h4>
        ))}
      </div>
      <hr />
      {schedule.map((item,i) => {
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: `1fr 1fr 3fr` }}>
            <p style={{ fontWeight: 'bold' }}>{item.Day}</p>
            <p>{item.Time}</p>
            <p>{item.What}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default ScheduleCard
