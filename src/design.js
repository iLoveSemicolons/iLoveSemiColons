import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PageTitle from "./components/pageTitle/pageTitle";
import DesignCell from "./components/designCell/designCell";


export default function Design (){

    return(

        <PageLayout>
            <MainLayout>
                <PageTitle title="Designs" />

                <DesignCell  projectTitle="ValidateOnTheFly"
                             projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                             demoLink="https://github.com/iLoveSemicolons/validateOnTheFly"/>
            </MainLayout>
        </PageLayout>
    );
}