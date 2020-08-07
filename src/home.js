import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";


export default function Home () {

    return (
        <PageLayout>
            <MainLayout>
                <div>Hello it is Home</div>
            </MainLayout>
        </PageLayout>
    );

}