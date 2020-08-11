import React from "react";
import "./designCell.scss";
import DemoButton from "../demoButton/DemoButton";


export default function DesignCell(props) {
    return (

        <div className="projectCellContainer">
            <div className="projectCell">

                <div className="projectCellTitle">
                    {props.projectTitle}
                </div>

                <div className="projectResume">
                    {props.projectResume}
                </div>

                <div className="demoButtonContainer">
                    <DemoButton buttonValue="Demo" demoLink={props.demoLink}/>
                </div>
            </div>
        </div>
    );
}

