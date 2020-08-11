import React from "react";
import "./demoButton.scss";


export default function DemoButton(props) {
    return (
        <div>
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                <button className="projectLinkButton">{props.buttonValue}</button>
            </a>
        </div>
    );

}