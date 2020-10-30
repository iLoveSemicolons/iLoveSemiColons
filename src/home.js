import React from "react"

import "./components/projectGithubLinkButton/projectGithubLinkButton.scss";
import "./home.scss"
import SubscribeButton from "./components/subscribeButton/SubscribeButton";
import TopicTitle from "./components/topicTitle/TopicTitle";
import ProjectCell from "./components/projectCell/ProjectCell";
import ArticleCell from "./components/articleCell/ArticleCell";
import ShowAll from "./components/showAll/showAll";
import {Helmet} from "react-helmet";
import toBeUsedIP from "./components/globalIP";

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
        fetch("http://"+toBeUsedIP.IP+":9000/homePageProjectTopic")
            .then(response => response.json())
            .then(response => this.setState({projectTopicAPIResponse: response}))
            .catch(function () {
                console.log('error');
            });
    }


    callPostTopicAPI() {
        fetch("http://"+toBeUsedIP.IP+":9000/homePagePostTopic")
            .then(response => response.json())
            .then(response => this.setState({postTopicAPIResponse: response}))
            .catch(function () {
                console.log('error');
            });
    }


    componentDidMount() {
        this.callProjectTopicAPI();
        this.callPostTopicAPI();
    }


    render() {

        const projects = this.state.projectTopicAPIResponse;
        //const designs = this.state.designTopicAPIResponse;
        const articles = this.state.postTopicAPIResponse;

        console.log(articles);
        return (
            <div>
                <Helmet>
                    <title>Home Page</title>
                    <meta name="description" content="My personal blog where I put my opensource projects and weekly articles about programming and web development."/>
                    <meta name="keywords" content="Open Source blog, Open Source, website, Lyon, portfolio, Sirage AL DBIAT, it, freelance, web development, web programming, full stack web developer, full stack"/>
                </Helmet>

                <div className="introContainer">
                    <div className="homePageIntroLeftContainer">
                        <div className="introTitle">
                            Hey, I am Sirage
                        </div>
                        <div className="introText">
                            A full stack web developer, Passionate by <span className="blueSpan">OpenSource</span>  projects and the contribution
                            to the modernization of the Web.
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

                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="homePageIntroRightContainer">
                        <div>
                            <img src="/me.svg" className="myImageHomePage" alt="Sirage AL DBIYAT"/>
                        </div>
                        <div className="rightContainerText">
                            Be informed when there is
                            a new project or an article
                            on my page !
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
                                         linkToSource ={project.linkToSource}
                                         demoLink={project.linkToDemo}/>
                        )}
                        <ShowAll goTo="/project" text="View all my projects"/>
                    </div>


                    <TopicTitle title="Last Articles"/>
                    <div>

                        {articles.map((article) =>
                            <ArticleCell key={article.idPost}
                                         idPost = {article.idPost}
                                         title={article.title}
                                         sourceLink={article.sourceLink}
                                         hashtags={article.hashtags}
                                         datePosted={article.datePosted}
                                         likes={article.likes}
                            />
                        )}
                        <ShowAll goTo="/blog" text="View all my articles"/>

                    </div>

                </div>
            </div>

        );
    }
}