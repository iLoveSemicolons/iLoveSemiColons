import React from "react";
import "./projectLinkbutton.scss";


export default function ProjectLinkButton(props) {
    return (
        <div>
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                <button className="projectLinkButton">Lien</button>
            </a>
        </div>
    );

}