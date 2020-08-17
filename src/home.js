import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import "./components/projectGithubLinkButton/projectGithubLinkButton.scss";
import "./home.scss"
import SubscribeButton from "./subscribeButton/SubscribeButton";
import TopicTitle from "./components/topicTitle/TopicTitle";
import ProjectCell from "./components/projectCell/ProjectCell";


export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {apiResponse: ""};
    }


    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}))
            .catch(function(){
                console.log('error');
            });
    }


    componentDidMount() {
        this.callAPI()
    }


    render() {
        return (
            <PageLayout>
                <MainLayout>
                    <div className="introContainer">
                        <div className="homePageIntroLeftContainer">
                            <div className="introTitle">
                                Bonjour, Je Suis Sirage
                            </div>
                            <div className="introText">
                                Je suis développeur web Fullstack. passionné
                                par les projets <span className="blueSpan">OpenSource</span> et la contribution
                                à la modernisation du Web.
                            </div>

                            <div>
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


                        </div>


                        <div className="homePageIntroRightContainer">
                            <div>
                                <img src="/me.svg" className="myImageHomePage" alt="Sirage AL DBIYAT"/>
                            </div>
                            <div className="rightContainerText">
                                Soyez informé lorsqu'il y a
                                un nouveau projet ou article
                                sur mon page !
                            </div>

                            <div>
                                <SubscribeButton/>
                            </div>
                        </div>
                    </div>


                    <TopicTitle title="Projects"/>


                    {/*================================================================================================================================================*/}

                    <div>
                        {this.state.apiResponse}
                    </div>

                    {/*================================================================================================================================================*/}


                    <TopicTitle title="Design"/>
                    <TopicTitle title="Derniers Articles"/>

                </MainLayout>
            </PageLayout>
        );
    }


}