import React from "react";

const SponsorCard = props => {
  //console.log(props.LogoURL)
  let logoSrc
  if (props.LogoURL !== '' ) {
    logoSrc = require(`../images/SponsorLogos/` + props.LogoURL)
  }
  console.log(logoSrc)
  return (
    <div>
          <a href={props.Link} style={{textAlign: "center"}}>
        <h4 className={props.Level}>{props.Name}</h4>
            {props.LogoURL !== "" ? (<img src={logoSrc} alt={props.Name}/>) : ''}
          </a>
    </div>
  );
};

export default SponsorCard;