import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";


export default function Design (){

    return(

        <PageLayout>
            <MainLayout>
                <div>Hello it is Design</div>
            </MainLayout>
        </PageLayout>
    );
}