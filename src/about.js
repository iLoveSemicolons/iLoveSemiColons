import React from "react"
import PageTitle from "./components/pageTitle/pageTitle";
import {Helmet} from "react-helmet";
import Styles from "./about.module.scss";
import styled from "styled-components";
import BlueText from "./components/blueText/blueText";
import SocialNetworkingContainer from "./components/socialNetworkingContainer/socialNetworkingContainer";


const NormalText = styled.div`
color: ${({theme}) => theme.NormalTextTextColor};
`


export default function About() {

    return (
        <div>
            <Helmet>

                {/*Search engines*/}
                <title>About Sirage al dbiyat, a blogger and and open source developer</title>
                <meta name={"description"}
                      content={"About Sirage Al dbiyat, a creator of several opensource projects and a blogger."}/>
                <meta name={"keywords"}
                      content={"About Sirage AL DBIYAT, sirage aldbiyat, open source creator, programmer, software developer, Lyon, France, web developer, coder, blogger, GitHub, fullstack"}/>
                <meta name="robots" content="index,follow"/>
                {/*=======================================================================*/}


                {/*Social media cards*/}
                <meta property="og:title" content="About Sirage al dbiyat, a blogger and and open source developer"/>
                <meta property="og:description"
                      content="About Sirage Al dbiyat, a creator of several opensource projects and a blogger."/>

                <meta property="og:image" content="/semicolonsOG.png"/>
                <meta property="og:type" content="Website"/>
                <meta property="og:locale" content="en_GB"/>
                <meta name="author" content="Sirage Al dbiyat"/>
                <meta name="copyright" content="Sirage Al dbiyat"/>
                {/*=======================================================================*/}


                {/*TWITTER CARD*/}
                <meta property="twitter:url" content="https://ilovesemicolons.io/about"/>
                <meta property="twitter:title"
                      content="About Sirage al dbiyat, a blogger and and open source developer"/>
                <meta property="twitter:description"
                      content="About Sirage Al dbiyat, a creator of several opensource projects and a blogger."/>

                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:image" content="/semicolonsOG.png"/>
                <meta name="twitter:site" content="@iLoveSemicolon"/>
                <meta name="twitter:creator" content="@iLoveSemicolon"/>
                {/*=======================================================================*/}
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
                acquired knowledge in front-end, back-end, UI/UX. The most important thing is that what I did was not
                only
                to learn new technologies but
                also to <BlueText text={"apply these technologies in real life"}/>
            </NormalText>
            <NormalText className={Styles.normalText}>
                <img className={Styles.icon} src={"code-24px.svg"} alt={"code icon"}/>
                Quite experienced in algorithms, data structure and design patterns. Since coding is not only about
                typing
                code, but also about the performance and the code architecture.
            </NormalText>

            <SocialNetworkingContainer/>
        </div>
    );
}