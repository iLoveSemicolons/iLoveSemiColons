import React from "react";
import "./projectCell.scss";
import ProjectGithubLinkButton from "../projectGithubLinkButton/projectGithubLinkButton";
import DemoButton from "../demoButton/DemoButton";
import styled from "styled-components";



const ProjectResume = styled.div`
        color : ${({theme}) => theme.projectResumeColor};
    `;

const ProjectCellStyled = styled.div`
       background-color : ${({theme}) => theme.projectBackgroundColor};
    `;


const ProjectCellTitle = styled.div`
        color : ${({theme}) => theme.projectCellTitleColor};
    `;

export default function ProjectCell(props) {

    return (
        <div className="projectCellContainer">
            <ProjectCellStyled className="projectCell">

                <ProjectCellTitle className="projectCellTitle">
                    {props.projectTitle}
                </ProjectCellTitle>

                <ProjectResume className="projectResume">
                    {props.projectResume}
                </ProjectResume>

                <div className="projectCellButtons">


                    {props.demoLink !== "noDemo" &&
                    <div className="projectDemoButtonContainer">
                        <DemoButton buttonValue="Demo" demoLink={props.demoLink}/>
                    </div>
                    }


                    {props.linkToSource !== "noSourceCode" &&
                    <div>
                        <ProjectGithubLinkButton projectTitle={props.projectTitle} linkToSource={props.linkToSource} pushes={props.pushes}/>
                    </div>
                    }

                </div>
            </ProjectCellStyled>
        </div>
    );
}

