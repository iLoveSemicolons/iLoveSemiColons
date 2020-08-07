import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";

export default function About (){

    return(
        <PageLayout>
            <MainLayout>
                <div>Hello it is about page</div>
            </MainLayout>
        </PageLayout>
    );
}