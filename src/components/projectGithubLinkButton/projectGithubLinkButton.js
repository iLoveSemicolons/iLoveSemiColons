import React from "react"
import "./projectGithubLinkButton.scss"


export default function ProjectGithubLinkButton(props) {
    return (
        <div className="buttonContainer">
            <a className="gitHubButton" href={props.goTo} rel="noopener noreferrer" target="_blank">
                <div>
                    <img src="/githubLogo.svg" alt="github logo" className="gitHubIcon"/>
                </div>
                <div>
                    Source
                </div>
{/*                <div className="pushes">
                    {props.pushes}
                </div>*/}
            </a>
        </div>
    );
}