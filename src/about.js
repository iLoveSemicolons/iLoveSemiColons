import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PageTitle from "./components/pageTitle/pageTitle";

export default function About (){

    return(
        <PageLayout>
            <MainLayout>

                <PageTitle title="A Propos"/>
            </MainLayout>
        </PageLayout>
    );
}