import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import "./components/projectGithubLinkButton/projectGithubLinkButton.scss";
import "./home.scss"
import SubscribeButton from "./components/subscribeButton/SubscribeButton";
import TopicTitle from "./components/topicTitle/TopicTitle";
import ProjectCell from "./components/projectCell/ProjectCell";
// import DesignCell from "./components/designCell/designCell";
import ArticleCell from "./components/articleCell/ArticleCell";
import ShowAll from "./components/showAll/showAll";


// import {I18nProvider, locales} from "./internationalization";


import translate from "./internationalization/translate";


export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectTopicAPIResponse: [],
            // designTopicAPIResponse: [],
            postTopicAPIResponse: []
        };
    }


    callProjectTopicAPI() {

        fetch("http://localhost:9000/homePageProjectTopic")
            .then(response => response.json())
            .then(response => this.setState({projectTopicAPIResponse: response}))
            .catch(function () {
                console.log('error');
            });
    }

    /*    callDesignTopicAPI() {
            fetch("http://localhost:9000/homePageDesignTopic")
                .then(response => response.json())
                .then(response => this.setState({designTopicAPIResponse: response}))
                .catch(function () {
                    console.log('error');
                });
        }*/


    callPostTopicAPI() {
        fetch("http://localhost:9000/homePagePostTopic")
            .then(response => response.json())
            .then(response => this.setState({postTopicAPIResponse: response}))
            .catch(function () {
                console.log('error');
            });
    }


    componentDidMount() {
        this.callProjectTopicAPI();
        // this.callDesignTopicAPI();
        this.callPostTopicAPI();
    }


    render() {

        const projects = this.state.projectTopicAPIResponse;
        // const designs = this.state.designTopicAPIResponse;
        const articles = this.state.postTopicAPIResponse;

        console.log(articles);
        return (
            <div>
                {/*<I18nProvider locale={locales.FRENCH}>*/}
                <div className="introContainer">
                    <div className="homePageIntroLeftContainer">
                        <div className="introTitle">
                            Bonjour, Je Suis Sirage
                        </div>
                        <div className="introText">
                            Je suis développeur web Fullstack. Passionné
                            par les projets <span className="blueSpan">OpenSource</span> et la contribution
                            à la modernisation du Web.

                            {/*{translate('homePageWelcoming',{value : <span className="blueSpan">OpenSource</span>})}*/}
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
                                    {/*                                        <div className="pushes">
                                            12
                                        </div>*/}
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

                <div className="topicsContainer">
                    <TopicTitle title="Projects"/>
                    <div>
                        {projects.map((project, index) =>
                            <ProjectCell key={project.idProject} projectTitle={project.title}
                                         projectResume={project.description}
                                         goTo={project.linkToSource}
                                         demoLink={project.linkToDemo}/>
                        )}
                        <ShowAll goTo="/project" text="Voir tous mes projects"/>
                    </div>

                    {/*                        <TopicTitle title="Design"/>
                        <div>
                            {designs.map((design, index) =>
                                <DesignCell key={design.idDesign} projectTitle={design.title}
                                            projectResume={design.resume}
                                            demoLink={design.linkToDemo}/>
                            )}
                            <ShowAll goTo="/design" text="Voir tous mes créations design"/>
                        </div>*/}

                    <TopicTitle title="Derniers Articles"/>
                    <div>

                        {articles.map((article) =>
                            <ArticleCell key={article.idPost}
                                         title={article.title}
                                         sourceLink={article.sourceLink}
                                         hashtags={article.hashtags}
                                         datePosted={article.datePosted}
                            />
                        )}
                        <ShowAll goTo="/blog" text="Voir tous mes articles"/>

                    </div>

                </div>
                {/*</I18nProvider>*/}
            </div>

        );
    }
}