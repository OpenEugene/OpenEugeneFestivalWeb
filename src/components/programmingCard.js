import React from 'react'

const ProgrammingCard = props => {
  let speakerPhoto
  if (props.Photo !== '' ) {
    speakerPhoto = require(`../images/speakers/` + props.Photo)
  }
  let speakerPhoto2
  if (props.Photo2 !== '') {
    speakerPhoto2 = require(`../images/speakers/` + props.Photo2)

  }
  return (
    <div>
      <h3 className="programName">{props['Program Name']}</h3>
      <div style={{display: "grid", gridTemplateColumns: "200px auto", gridGap: "10px"}}>
        <div>
          <h4>Presenter: <br />
          {props['Your Name']}</h4>
          <img src={speakerPhoto} alt={props['Your Name']} />
          {speakerPhoto2 && <img src={speakerPhoto2} alt={props['Your Name']} />
}
        </div>
        <p>Description: {props['Longer Description']}</p>
      </div>
      <hr />
    </div>
  )
}

export default ProgrammingCard
