import React from "react"
import "./project.scss";
import PageTitle from "./components/pageTitle/pageTitle";
import ProjectCell from "./components/projectCell/ProjectCell";
import NewIdeaBox from "./components/newIdeaBox/newIdeaBox";
import {Helmet} from "react-helmet";
import toBeUsedAddress from "./components/globalIP";


export default class Project extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            apiResponse: [],
        };
    }

    callAPI() {
        fetch(toBeUsedAddress.address + ":9000/project")
            .then(response => response.json())
            .then(response => this.setState({apiResponse: response}))
            .catch(function () {
                console.log('error');
            });
    }

    componentDidMount() {
        this.callAPI();
    }


    render() {

        const projects = this.state.apiResponse;

        return (
            <div>
                <Helmet>
                    {/*Search engines*/}
                    <title>Opensource projects following web development trends</title>
{/*                    <meta name={"description"} content={"Discover and contribute to development of trending opensource projects that support other programmers across the globe."}/>
                    <meta name={"keywords"}
                          content={"Open Source Project, interesting open source, interesting, contribute, opensource, open source, GitHub, clone, it, Sirage Al dbiyat, web development"}/>
                    <meta name="robots" content="index,follow"/>*/}
                    {/*=======================================================================*/}


                    {/*Social media cards*/}
{/*                    <meta property="og:title" content="Opensource projects following web development trends"/>
                    <meta property="og:description"
                          content="Discover and contribute to development of trending opensource projects that support other programmers across the globe."/>*/}
                    {/*=======================================================================*/}


                    {/*TWITTER CARD*/}
{/*                    <meta property="twitter:url" content="https://ilovesemicolons.io/project"/>
                    <meta property="twitter:title"
                          content="Opensource projects following web development trends"/>
                    <meta property="twitter:description"
                          content="Discover and contribute to development of trending opensource projects that support other programmers across the globe."/>*/}
                    {/*=======================================================================*/}
                </Helmet>
                <PageTitle title="Projects"/>

                <NewIdeaBox ideaBoxTitle="You have an idea for a project ?"/>


                {projects.map(project =>
                    <ProjectCell key={project.idProject}
                                 projectTitle={project.title}
                                 projectResume={project.description}
                                 linkToSource={project.linkToSource}
                                 demoLink={project.linkToDemo}/>
                )}
            </div>
        );
    }

}





