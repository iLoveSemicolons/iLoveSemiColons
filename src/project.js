import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import "./project.scss";
import PageTitle from "./components/pageTitle/pageTitle";
import ProjectCell from "./components/projectCell/ProjectCell";


//TODO this is the component where all project should be listed


export default class Project extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            apiResponse :[],
        };
    }

    callAPI(){
        fetch("http://localhost:9000/project")
            .then(response => response.json())
            .then(response => this.setState({apiResponse: response}))
            .catch(function(){
                console.log('error');
            });
    }


    componentDidMount() {
         this.callAPI();
    }


    render(){

        const  projects  = this.state.apiResponse;

        // console.log(projects[0]["title"]);

        return (
            <PageLayout>
                <MainLayout>
                    <PageTitle title="Projects"/>

                    {projects.map(project =>
                            <ProjectCell projectTitle={project.title}
                                         projectResume={project.description}
                                         goTo={project.linkToSource} pushes="312"
                                         demoLink={project.linkToDemo}/>
                        )}



                   <ProjectCell projectTitle="ValidateOnTheFly"
                                 projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                                 goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                                 demoLink="https://github.com/iLoveSemicolons/validateOnTheFly"/>
                    <ProjectCell projectTitle="ValidateOnTheFly"
                                 projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                                 goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                                 demoLink="noDemo"/>
                    <ProjectCell projectTitle="ValidateOnTheFly"
                                 projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                                 goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                                 demoLink="https://github.com/iLoveSemicolons/validateOnTheFly"/>

                    <ProjectCell projectTitle="ValidateOnTheFly"
                                 projectResume="Javascript form validation and notifica-tion library, simple, fast, polyvalent and Open Source"
                                 goTo="https://github.com/iLoveSemicolons/validateOnTheFly" pushes="312"
                                 demoLink="https://github.com/iLoveSemicolons/validateOnTheFly"/>

                </MainLayout>
            </PageLayout>


        );
    }

}





