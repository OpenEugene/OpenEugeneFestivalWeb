import React from 'react'

const ArticleCard = props => {

  return (
    <a href={props.link} >
      <h3>{props.name}</h3>
      <p>{new Date(props.date).toDateString()}</p>
      <img src={props.ImageURL} alt={props.name} style={{height: "200px"}}/>
      <hr />
    </a>
  )
}

export default ArticleCard
