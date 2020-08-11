import React from "react";
import "./projectCell.scss";
import ProjectGithubLinkButton from "../projectGithubLinkButton/projectGithubLinkButton";
import DemoButton from "../demoButton/DemoButton";

export default function ProjectCell(props) {
    return (

        <div className="projectCellContainer">
            <div className="projectCell">

                <div className="projectCellTitle">
                    {props.projectTitle}
                </div>

                <div className="projectResume">
                    {props.projectResume}
                </div>

                <div className="projectCellButtons">
                    <div>
                        <ProjectGithubLinkButton goTo={props.goTo} pushes={props.pushes}/></div>

                    {props.demoLink !== "noDemo" &&
                    <div className="projectDemoButtonContainer">
                        <DemoButton buttonValue="Lien" demoLink={props.demoLink}/>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

