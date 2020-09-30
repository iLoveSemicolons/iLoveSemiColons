import React from "react"
import PageTitle from "./components/pageTitle/pageTitle";
import {Helmet} from "react-helmet";

export default function About() {

    return (
        <div>
            <Helmet>
                <title>About Me</title>
                <meta name="description" content=""/>
                <meta name="author" content="Sirage al dbiyat"/>
                <meta charSet="utf-8"/>
            </Helmet>
            <PageTitle title="About Me"/>
        </div>
    );
}