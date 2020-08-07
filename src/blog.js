import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";


export default function Blog (){

    return(
        <PageLayout>
            <MainLayout>
                <div>Hello it is Blog</div>
            </MainLayout>
        </PageLayout>
    );


}