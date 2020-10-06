import React from "react"
import PageTitle from "./components/pageTitle/pageTitle";
import {Helmet} from "react-helmet";

export default function About() {

    return (
        <div>
            <Helmet>
                <title>About Me</title>
                <meta name={"description"}
                      content={"I am a Full Stack web developer and an Open Source Creator"}/>
                <meta name={"keywords"}
                      content={" About Sirage AL DBIYAT, Sirage AL DBIYAT, open source creator, programmer, software developer, Lyon, France, web developer, coder, blogger, GitHub"}/>
            </Helmet>
            <PageTitle title="About Me"/>
        </div>
    );
}