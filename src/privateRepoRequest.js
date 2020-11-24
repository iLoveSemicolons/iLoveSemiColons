import React from 'react'
import PageTitle from "./components/pageTitle/pageTitle";
import style from './privateRepoRequest.module.scss';
import styled from "styled-components";
import toBeUsedAddress from "./components/globalIP";
import {Helmet} from "react-helmet";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";

const Form = styled.form`
        background-color : ${({theme}) => theme.contactFormBackgroundColor}; 
        `

const TextInput = styled.input`
        background-color : ${({theme}) => theme.contactFormTextInputBackgroundColor};
        color : ${({theme}) => theme.contactFormTextInputColor};
        border-color : ${({theme}) => theme.contactFormTextInputBorderColor};
        
         &::place-holder  : {
         color : ${({theme}) => theme.contactFormTextInputColor};
         }
        `

const FormTitle = styled.div`
color ${({theme}) => theme.NormalTextTextColor};
`

const PrivateRequestThankBox = styled.div`
        background-color : ${({theme}) => theme.contactThanksBoxBackgroundColor};
        color : ${({theme}) => theme.contactThanksBoxTextColor};
        `


export default class PrivateRepoRequest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            githubUserName: '',
            email: '',

            //project title is getting passed from projectGithubLinkButton component
            projectTitle: this.props.location.state.projectTitle,

            error: 0,
            formIsSent: false,
            submitButtonIsClicked: false,
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleGithubUserNameChange = this.handleGithubUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);

    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitButtonIsClicked: true});


        const submitAfterValidation = async () => {
            await this.checkInputEmail(this.state.email);
            await this.checkInputRequired(this.state.email);
            await this.checkInputRequired(this.state.firstName);
            await this.checkInputRequired(this.state.lastName);
            await this.checkInputRequired(this.state.githubUserName);


            if (this.state.error === 0) {
                fetch(toBeUsedAddress.address + "/postPrivateRepoRequest", {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        githubUserName: this.state.githubUserName,
                        projectTitle: this.state.projectTitle
                    })
                })
                    .then((response) => {
                        this.setState({formIsSent: true});
                        return response;
                    })
                    .then(response => response.json())
                    .catch(error => console.log(error));
            }
        }

        submitAfterValidation()
            .catch((error) => {
                console.log(error);
            })
        this.setState({error: 0});
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});

    }

    handleGithubUserNameChange(event) {
        this.setState({githubUserName: event.target.value});

    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }


    goBack() {
        window.history.back();
    }


//=== VALIDATION =========================================================
    checkInputRequired(inputValue) {
        let regex = /^\s+/;
        if (regex.test(String(inputValue)) || inputValue.length === 0) {
            this.setState({error: this.state.error + 1})
        } else if (typeof (inputValue) === "undefined") {
            this.setState({error: this.state.error + 1})
        } else {
            this.setState({error: this.state.error});
        }
    }

    checkInputEmail(inputValue) {
        let regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(String(inputValue).toLowerCase())) {
            this.setState({error: this.state.error + 1})
        } else {
            this.setState({error: this.state.error});
        }
    }

//========================================================================


    render() {
        const formIsSent = this.state.formIsSent;
        const submitButtonIsClicked = this.state.submitButtonIsClicked;
        const inputErrors = this.state.error;


        console.log(this.state.projectTitle);

        return (
            <PageLayout>
                <MainLayout>
                    <Helmet>
                        <meta name="robots" content="None"/>
                        <title>{"Access Reqeust | " + this.state.projectTitle}</title>
                    </Helmet>


                    <PageTitle title={"Access Reqeust | " + this.state.projectTitle}/>


                    {
                        formIsSent
                            ? <PrivateRequestThankBox className={style.PrivateRequestThankBox}>
                                <div>
                                    Your request has been sent, i will reply to you as soon as possible :)
                                </div>
                                <div className={style.privateRequestThankBoxContainer}>
                                    <button onClick={this.goBack} className={style.PrivateRequestGoBackButton}>Return to
                                        Home
                                        page
                                    </button>
                                </div>
                            </PrivateRequestThankBox>


                            : <Form className={style.form} onSubmit={this.handleSubmit}>

                                <div className={style.formTitleContainer}>
                                    <FormTitle className={style.formTitle}>
                                        in order to have an access to my my private GitHub repository please fill this form
                                        and
                                        i
                                        will reply to you by email.
                                    </FormTitle>
                                </div>

                                {(submitButtonIsClicked && !(inputErrors === 0)) &&
                                <div className={style.errorNotification}>
                                    Please, verify your entries.
                                </div>
                                }

                                <TextInput className={style.textInput} type="text" value={this.state.firstName}
                                           onChange={this.handleFirstNameChange}
                                           placeholder="First Name (Required)"/>

                                <TextInput className={style.textInput} type="text" value={this.state.lastName}
                                           onChange={this.handleLastNameChange}
                                           placeholder="Last Name (Required)"/>

                                <TextInput className={style.textInput} type="text" value={this.state.githubUserName}
                                           onChange={this.handleGithubUserNameChange}
                                           placeholder="GitHub Username (Required)"/>

                                <TextInput className={style.textInput} type="email" value={this.state.email}
                                           onChange={this.handleEmailChange}
                                           placeholder="Email (Required)"/>
                                <div>
                                    <input className={style.submitButton} type="submit" value="Send Request"/>
                                </div>
                            </Form>
                    }
                </MainLayout>
            </PageLayout>
        );
    }

}