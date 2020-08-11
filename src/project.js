import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import "./project.scss";
import PageTitle from "./components/pageTitle/pageTitle";
import ProjectCell from "./components/projectCell/ProjectCell";


//TODO this is the component where all project should be listed

export default function Project() {
    return (
        <PageLayout>
            <MainLayout>
                <PageTitle title="Projects"/>
                <ProjectCell projectTitle="ValidateOnTheFly"
                             projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                             goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                             demoLink="https://github.com/iLoveSemicolons/validateOnTheFly"/>
                <ProjectCell projectTitle="ValidateOnTheFly"
                             projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                             goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                             demoLink="noDemo"/>
                <ProjectCell projectTitle="ValidateOnTheFly"
                             projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                             goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                             demoLink="https://github.com/iLoveSemicolons/validateOnTheFly"/>

                <ProjectCell projectTitle="ValidateOnTheFly"
                             projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                             goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                             demoLink="https://github.com/iLoveSemicolons/validateOnTheFly"/>
            </MainLayout>
        </PageLayout>
    );
}