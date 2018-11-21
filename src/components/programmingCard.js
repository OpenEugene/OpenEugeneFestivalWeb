import React from "react";

const ProgrammingCard = props => {
  return (
    <div>
        <h3 className="programName">{props["Program Name"]}</h3>
        <ul>
          <li>Presenter: {props["Your Name"]}</li>
          <li>Description: {props["Longer Description"]}</li>
        </ul>
        <hr></hr>
    </div>
  );
};

export default ProgrammingCard;