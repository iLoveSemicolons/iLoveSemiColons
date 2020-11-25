import React from "react"
import "./project.scss";
import PageTitle from "./components/pageTitle/pageTitle";
import ProjectCell from "./components/projectCell/ProjectCell";
import NewIdeaBox from "./components/newIdeaBox/newIdeaBox";
import {Helmet} from "react-helmet";
import toBeUsedAddress from "./components/globalIP";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";


export default class Project extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            apiResponse: [],
        };
    }

    callAPI() {
        fetch(toBeUsedAddress.address + "/project")
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
        console.log(projects);
        return (
            <PageLayout>
                <MainLayout>


                    <Helmet>
                        {/*Search engines*/}
                        <title>Opensource projects following web development trends</title>
                        <meta name={"description"}
                              content={"Discover and contribute to development of trending opensource projects that support other programmers across the globe."}/>
                        <meta name={"keywords"}
                              content={"Open Source Project, interesting open source, interesting, contribute, opensource, open source, GitHub, clone, it, Sirage Al dbiyat, web development"}/>
                        <meta name="robots" content="index,follow"/>
                    </Helmet>
                    <PageTitle title="Projects"/>

                    <NewIdeaBox ideaBoxTitle="You have an idea for a project ?"/>


                    {projects.map(project =>
                        <ProjectCell key={project.idProject}
                                     projectTitle={project.title}
                                     projectResume={project.description}
                                     linkToSource={project.linkToSource}
                                     demoLink={project.linkToDemo}
                                     language = {project.language}
                        />
                    )}
                </MainLayout>
            </PageLayout>
        );
    }

}





