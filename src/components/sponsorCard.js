import React from "react";

const SponsorCard = props => {
  console.log(props.LogoURL)
  let logoSrc
  if (props.LogoURL !== '' ) {
    logoSrc = require('../images/' + props.LogoURL)
  }
  console.log(logoSrc)
  return (
    <div>
        <h4 className="sponsorName">{props.Name}</h4>
          <a href={props.Link} >
            {props.LogoURL !== "" ? (<img src={logoSrc} alt={props.Name}/>) : ''}
          </a>
    </div>
  );
};

export default SponsorCard;