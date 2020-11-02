import React from "react"
import "./project.scss";
import PageTitle from "./components/pageTitle/pageTitle";
import ProjectCell from "./components/projectCell/ProjectCell";
import NewIdeaBox from "./components/newIdeaBox/newIdeaBox";
import {Helmet} from "react-helmet";
import toBeUsedIP from "./components/globalIP";


export default class Project extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            apiResponse: [],
        };
    }

    callAPI() {
        fetch("http://" + toBeUsedIP.IP + ":9000/project")
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
                    <title>Projects</title>
                    <meta name={"description"} content={"Learn, discover, and contribute to my open source projects."}/>
                    <meta name={"keywords"}
                          content={"Open Source Project, interesting open source, interesting, contribute, opensource, open source, GitHub, fork, it, Sirage Al dbiyat, web development"}/>
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





