import React from "react";

const ProjectCard = props => {
  return (
    <div>
        <h3 className="projectName">{props["Project Name"]}</h3>
        <ul>
          <li>Type of Project: {props["Type of Project"]}</li>
          <li>Stage of Project: {props["What stage is your project in today?"]}</li>
          <li>Description: {props["Longer Description"]}</li>
        </ul>
        <hr></hr>
    </div>
  );
};

export default ProjectCard;