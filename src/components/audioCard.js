import React from 'react'

const AudioCard = props => {

  return (
    <a href={props.link}>
      <h3>{props.name}</h3>
      <p>{new Date(props.date).toDateString()}</p>
      <img src={props.ImageURL} alt={props.name} />
      <hr />
    </a>
  )
}

export default AudioCard
