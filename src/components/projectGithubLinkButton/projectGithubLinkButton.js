import React from "react"
import "./projectGithubLinkButton.scss"
import {NavLink} from "react-router-dom";

export default function ProjectGithubLinkButton(props) {

    let linkToSource = props.linkToSource;
    let projectTitle = props.projectTitle

    let goToSource = (linkToSource,projectTitle) => {
        if(linkToSource === "privateSource"){
            return gotoPrivateSource(projectTitle);
        }

        else {
            return gotoPublicSource(linkToSource);
        }
    }



    let gotoPublicSource = (linkToSource) => {
        return (
            <a className="gitHubButton" href={linkToSource} rel="noopener noreferrer"
               target="_blank">
                <div>
                    <img src="/githubLogo.svg" alt="github logo" className="gitHubIcon"/>
                </div>
                <div>
                    Source
                </div>
            </a>
        );
    }




    let gotoPrivateSource = (projectTitle) => {
        return (
            <NavLink className={"gitHubButton"} to={{pathname : '/privateRepoRequest',  state: {projectTitle: `${projectTitle}`}
            }}>
                <div>
                    <img src="/githubLogo.svg" alt="github logo" className="gitHubIcon"/>
                </div>
                <div>
                    Private
                </div>
            </NavLink>);
    }


    return (
        <div className="buttonContainer">
            {goToSource(linkToSource,projectTitle)}
        </div>
    );
}