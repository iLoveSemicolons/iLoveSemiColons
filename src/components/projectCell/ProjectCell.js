import React from "react";
import "./projectCell.scss";
import ProjectGithubLinkButton from "../projectGithubLinkButton/projectGithubLinkButton";
import ProjectLinkButton from "../projectLinkButton/ProjectLinkButton";


//TODO if projectResume is more than a certain size there should be written more lines without overlapping.
//TODO conditional rendering, in case the project has no demo



export default function ProjectCell(props) {
    return (
        <div className="projectCell">

            <div className="projectCellTitle">
                {props.projectTitle}
            </div>

            <div className="projectResume">
                {props.projectResume}
            </div>

            <div className="projectCellButtons">
                <ProjectGithubLinkButton goTo={props.goTo} pushes={props.pushes}/>
                <ProjectLinkButton demoLink={props.goTo}/>
            </div>
        </div>
    );
}

