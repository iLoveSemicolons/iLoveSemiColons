import React from "react";

import "./components/projectGithubLinkButton/projectGithubLinkButton.scss";
import "./home.scss";
import SubscribeButton from "./components/subscribeButton/SubscribeButton";
import TopicTitle from "./components/topicTitle/TopicTitle";
import ProjectCell from "./components/projectCell/ProjectCell";
import ShowAll from "./components/showAll/showAll";
import { Helmet } from "react-helmet";
import toBeUsedAddress from "../src/config/globalIP";

import SocialNetworkingContainer from "./components/socialNetworkingContainer/socialNetworkingContainer";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PostsTopic from "./components/postsTopic/PostsTopic";


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectTopicAPIResponse: [],
      // designTopicAPIResponse: [],
      postTopicAPIResponse: [],
    };
  }

  callProjectTopicAPI() {
    fetch(toBeUsedAddress.address + "/homePageProjectTopic", {
      method: "GET",
      headers: { 'Access-Control-Allow-Origin': "*" }
    })
      .then((response) => response.json())
      .then((response) => this.setState({ projectTopicAPIResponse: response }))
      .catch(function () {
        console.log("error");
      });
  }

  componentDidMount() {
    this.callProjectTopicAPI();
  }

  render() {
    const projects = this.state.projectTopicAPIResponse;
    //const designs = this.state.designTopicAPIResponse;

    return (
      <div>
        <Helmet>
          {/*Search engines*/}
          <title>
            Opensource projects and blog posts about web development
          </title>
          <meta
            name="description"
            content="Opensource projects and weekly posts about programming and web development."
          />
          <meta
            name="keywords"
            content="i love semicolons, ilovesemicolons, Lyon, France, homepage, home page, opensource, blog, Open Source, website, portfolio, Sirage AL DBIYAT, ALDBIYAT, it, freelance, freelancing, autoentrepreneur, web development, web programming, full stack web developer, full stack"
          />
          <meta name="robots" content="index,follow" />
        </Helmet>
        <PageLayout>
          <MainLayout>
            <div className="introContainer">
              <div className="homePageIntroLeftContainer">
                <div className="introTitle">Hey, I am Sirage </div>
                <div className="introText">
                  A full stack web developer, passionate about
                  <span className="blueSpan"> open - source </span> projects and
                  the contribution to web modernization
                </div>
                <div>
                  <SocialNetworkingContainer />
                </div>
              </div>
              <div className="homePageIntroRightContainer">
                <div>
                  <img
                    src="/me.svg"
                    className="myImageHomePage"
                    alt="Sirage AL DBIYAT"
                  />
                </div>
                <div className="rightContainerText">
                  Be informed when there is a new project or an article on my
                  page!
                </div>
                <div>
                  <SubscribeButton />
                </div>
              </div>
            </div>
            <div className="topicsContainer">
              <TopicTitle title="Projects" />
              <div>
                {projects.map((project, index) => (
                  <ProjectCell
                    key={project.idProject}
                    projectTitle={project.title}
                    projectResume={project.description}
                    linkToSource={project.linkToSource}
                    demoLink={project.linkToDemo}
                    language={project.language}
                  />
                ))}
                <ShowAll goTo="/project" text="View all my projects" />
              </div>
              <TopicTitle title="Latest Posts" />
              <PostsTopic />
              <ShowAll goTo="/blog" text="View all my posts" />
            </div>
          </MainLayout>
        </PageLayout>
      </div>
    );
  }
}
