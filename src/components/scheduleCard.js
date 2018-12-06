import React from 'react'
import schedule from '../json/schedule'

//import './scheduleCard.css';

const ScheduleCard = props => {
  const headers = Object.getOwnPropertyNames(schedule[0])
  //console.log(headers)
  //console.log(schedule.map(stuff => stuff.Day))
  // map all items under each header
  // const data = schedule.map((item, i) => (
  //   <div key={i} className="s-item">
  //     <p>{item.Day}</p>
  //     <p>{item.Time}</p>
  //     <p>{item.What}</p>
  //   </div>
  // ))

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
      {schedule.map(item => {
        return (
          <div style={{ display: 'grid', gridTemplateColumns: `1fr 1fr 3fr` }}>
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
