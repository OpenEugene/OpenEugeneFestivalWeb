import React from 'react'

//const cardStyle = {}

const leaderCard = (props) => {
  return (
    <div style={{
      width: 250,
      boxShadow: '0px 1px 14px 0px #aaa',
      padding: '1rem',
      borderRadius: 10,
      margin: '1rem',
      textAlign: 'center'
    }}>
      <h4 className="leaderName">{props["What is your name?"]}</h4>
      <img  src={props.avatar} alt={props["What is your name?"]} />
      <p className="leaderRole">{props["What your area or expertise or desired role"]}</p>
      <p className="leaderEvent">Favorite event: {props["What was you favorite event this year?"]}</p>
    </div>
  )
}

export default leaderCard;
