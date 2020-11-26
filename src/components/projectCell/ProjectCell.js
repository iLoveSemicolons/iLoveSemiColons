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


const SingleLanguage = styled.div`
color : ${({theme}) => theme.projectLanguageColor}
`;


const LanguageCircle = styled.div`
background-color : ${props => props.backgroundColor}
`;


const languageCircleColorChooser = (language) => {
    switch (language) {
        case "Javascript":
            return <LanguageCircle backgroundColor={"#ff9e2c"} className={"languageCircle"}/>;
        case "C++" :
            return <LanguageCircle backgroundColor={"#50CF96"} className={"languageCircle"}/>;
        case "Make file" :
            return <LanguageCircle backgroundColor={"#50CF96"} className={"languageCircle"}/>;
        case "HTML":
            return <LanguageCircle backgroundColor={"#6699ff"} className={"languageCircle"}/>;
        case "PHP" :
            return <LanguageCircle backgroundColor={"#333399"} className={"languageCircle"}/>;
        case "Json":
            return <LanguageCircle backgroundColor={"#ff6600"} className={"languageCircle"}/>;
        case "CSS":
            return <LanguageCircle backgroundColor={"#7300e6"} className={"languageCircle"}/>;
        case "SCSS":
            return <LanguageCircle backgroundColor={"#7300e6"} className={"languageCircle"}/>;
        default :
            return <LanguageCircle backgroundColor={"#EEEEEE"} className={"languageCircle"}/>;
    }
}


const mappingLanguage = (language) => {
    let languageToArrayOfLanguage = language.split(',');
    return (
        languageToArrayOfLanguage.map((language, index) =>
            <div className={"singleLanguageContainer"} key={index}>
                {languageCircleColorChooser(language)}
                <SingleLanguage>
                    {language}
                </SingleLanguage>
            </div>
        )
    );
}


export default function ProjectCell(props) {

    return (
        <div className={"projectCellWrapper"}>
            <ProjectCellStyled className="projectCellContainer">

                <div className="projectCell">
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
                            <ProjectGithubLinkButton projectTitle={props.projectTitle} linkToSource={props.linkToSource}
                                                     pushes={props.pushes}/>
                        </div>
                        }
                    </div>
                </div>
                <div className={'languageContainer'}>
                    {mappingLanguage(props.language)}
                </div>
            </ProjectCellStyled>
        </div>
    );
}

