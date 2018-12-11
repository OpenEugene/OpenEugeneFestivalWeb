import React from 'react'

const VideoCard = props => {
  const embedURL = props.link.replace(/youtu.be/,'youtube.com/embed') //+ '/embed' + props.link.slice(16)
  console.log(embedURL)
  return (
    <iframe 
      title={props.name}
      width="500"
      height="300"
      src={embedURL}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      >
      <hr />
      </iframe>    

  )
}

export default VideoCard
