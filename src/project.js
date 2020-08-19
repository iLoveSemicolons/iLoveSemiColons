import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import "./project.scss";
import PageTitle from "./components/pageTitle/pageTitle";
import ProjectCell from "./components/projectCell/ProjectCell";


//TODO what to do in case there is no source code but only demo

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
                                         goTo={project.linkToSource}
                                         demoLink={project.linkToDemo}/>
                        )}
                </MainLayout>
            </PageLayout>


        );
    }

}





