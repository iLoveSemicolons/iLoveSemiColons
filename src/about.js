import React from "react"
import PageTitle from "./components/pageTitle/pageTitle";
import {Helmet} from "react-helmet";
import Styles from "./about.module.scss";
import styled from "styled-components";
import BlueText from "./components/blueText/blueText";
import SocialNetworkingContainer from "./components/socialNetworkingContainer/socialNetworkingContainer";


//TODO change i to I;

const NormalText = styled.div`
color: ${({theme}) => theme.NormalTextTextColor};
`


export default function About() {

    return (
        <div>
            <Helmet>
                <title>About Me</title>
                <meta name={"description"}
                      content={"I am a Full Stack web developer and an Open Source Creator"}/>
                <meta name={"keywords"}
                      content={"    About Sirage AL DBIYAT, Sirage AL DBIYAT, open source creator, programmer, software developer, Lyon, France, web developer, coder, blogger, GitHub"}/>
            </Helmet>
            <PageTitle title="I am : "/>

            <NormalText className={Styles.normalText}>
                <img className={Styles.icon} src={"person_search-24px.svg"} alt={"loop on me icon"}/>

                Sirage AL DBIYAT, a <BlueText text={"Full-Stack Web Developer"}/>, passionate about <BlueText
                text={"open source"}/> projects and the contribution to web modernization.
                This is my personal website where I host my projects and posts which i called iLoveSemicolons because
                obviously ... I love semicolons <span className={Styles.semiColon}>;</span>
            </NormalText>


            <NormalText className={Styles.normalText}>
                <img src={"school-24px.svg"} alt={"education icon"} className={Styles.icon}/>
                A <BlueText text={"self-taught"}/> programmer, I enrolled in many certified online courses where I
                acquired knowledge in front-end, back-end, UI/UX. The most important thing is that what I did was not only
                to learn new technologies but
                also to <BlueText text={"apply these technologies in real life"}/>
            </NormalText>
            <NormalText className={Styles.normalText}>
                <img className={Styles.icon} src={"code-24px.svg"} alt={"code icon"}/>
                Quite experienced in algorithms, data structure and design patterns. Since coding is not only about typing
                code, but also about the performance and the code architecture.
            </NormalText>

            <SocialNetworkingContainer/>
        </div>
    );
}