import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import "./components/projectGithubLinkButton/projectGithubLinkButton.scss";
import "./home.scss"
import SubscribeButton from "./subscribeButton/SubscribeButton";


export default function Home() {

    return (
        <PageLayout>
            <MainLayout>
                <div className="introContainer">
                    <div className="homePageIntroLeftContainer">
                        <div className="introTitle">
                            Bonjour, Je Suis Sirage
                        </div>
                        <div>
                            Je suis développeur web Fullstack. passionné
                            par les projets OpenSource et la contribution
                            à la modernisation du Web.
                        </div>


                        <div className="buttonContainer">
                            <a className="gitHubButton" href="https://github.com/iLoveSemicolons"
                               rel="noopener noreferrer" target="_blank">
                                <div>
                                    <img src="/githubLogo.svg" alt="github logo" className="gitHubIcon"/>
                                </div>
                                <div>
                                    iLoveSemicolons
                                </div>
                                <div className="pushes">
                                    12
                                </div>
                            </a>
                        </div>


                    </div>


                    <div className="homePageIntroRightContainer">
                        <div>
                            <img src="/me.svg" className="myImageHomePage" alt="Sirage AL DBIYAT"/>
                        </div>
                        <div>
                                Soyez informé lorsqu'il y a
                                un nouveau projet ou article
                                sur mon page !
                            </div>

                        <div>
                            <SubscribeButton/>
                        </div>
                    </div>
                </div>

                <SubscribeButton/>

            </MainLayout>
        </PageLayout>
    );

}