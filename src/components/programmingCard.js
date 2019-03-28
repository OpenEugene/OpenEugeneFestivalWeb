import React from 'react'

const ProgrammingCard = props => {
  let speakerPhoto
  if (props.Photo !== '') {
    speakerPhoto = require(`../images/speakers/` + props.Photo)
  }
  let speakerPhoto2
  if (props.Photo2 !== '') {
    speakerPhoto2 = require(`../images/speakers/` + props.Photo2)
  }
  return (
    <div>
      <h3 className="programName">{props['Program Name']}</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '200px auto',
          gridGap: '10px',
        }}
      >
        <div>
          <h4>
            Presenter: <br />
            <a
              href={
                props[
                  'Link to speakers public profile (linked-in, Medium, or...)'
                ]
              }
            >
              {props['Your Name']}
            </a>
          </h4>
          <a
            href={
              props[
                'Link to speakers public profile (linked-in, Medium, or...)'
              ]
            }
          >
            <img src={speakerPhoto} alt={props['Your Name']} />
          </a>
          {speakerPhoto2 && (
            <a
              href={
                props[
                  'Second speakers public profile (linked-in, Medium, or...)'
                ]
              }
            >
              <img src={speakerPhoto2} alt={props['Your Name']} />
            </a>
          )}
        </div>
        <p>Description: {props['Longer Description']}</p>
      </div>
      <hr />
    </div>
  )
}

export default ProgrammingCard
