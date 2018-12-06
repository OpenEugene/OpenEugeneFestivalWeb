import React from "react";

const SponsorCard = props => {
  //console.log(props.LogoURL)
  let logoSrc
  if (props.LogoURL !== '' ) {
    logoSrc = require(`../images/SponsorLogos/` + props.LogoURL)
  }
  //console.log(logoSrc)
  return (
    <div>
          <a href={props.Link} style={{textAlign: "center"}}>
            {props.LogoURL !== "" ? (<img src={logoSrc} alt={props.Name} className={props.Level}/>) : ( <h4 className={props.Level}>{props.Name}</h4>)}
          </a>
    </div>
  );
};

export default SponsorCard;