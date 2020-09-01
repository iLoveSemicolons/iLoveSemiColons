import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PageTitle from "./components/pageTitle/pageTitle";
import style from "./contact.module.scss";
import {Link} from "react-router-dom";

export default class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lastNameField: '',
            emailField: '',
            subjectField: '',
            messageField: '',
            error: 0,
            formIsSent: false,
            submitButtonIsClicked: false,
        }
        this.handleLastNameFieldChange = this.handleLastNameFieldChange.bind(this);
        this.handleEmailFieldChange = this.handleEmailFieldChange.bind(this);
        this.handleSubjectFieldChange = this.handleSubjectFieldChange.bind(this);
        this.handleMessageFieldChange = this.handleMessageFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkInputRequired = this.checkInputRequired.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();


        let date = new Date();
        date = date.toISOString().slice(0, 19).replace("T", ' ');

        this.setState({submitButtonIsClicked: true});


        const submitAfterValidation = async () => {
            await this.checkInputEmail(this.state.emailField);
            await this.checkInputRequired(this.state.emailField);
            await this.checkInputRequired(this.state.messageField);
            await this.checkInputRequired(this.state.subjectField);
            await this.checkInputRequired(this.state.lastNameField);

            console.log(this.state.error);

            if (this.state.error === 0) {
                fetch('http://localhost:9000/contact', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        lastName: this.state.lastNameField,
                        email: this.state.emailField,
                        subject: this.state.subjectField,
                        message: this.state.message,
                        date: date
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
            });
        this.setState({error: 0});

    }


    handleLastNameFieldChange(event) {
        this.setState({lastNameField: event.target.value});
    }

    handleEmailFieldChange(event) {
        this.setState({emailField: event.target.value});
    }

    handleSubjectFieldChange(event) {
        this.setState({subjectField: event.target.value});
    }

    handleMessageFieldChange(event) {
        this.setState({messageField: event.target.value});
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
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        return (
            <PageLayout>

                <MainLayout>
                    <PageTitle title="Contact"/>
                    {
                        formIsSent
                            ? <div className={style.contactThanksBox}>
                                <div>
                                    Thank you for contacting me, i will recontact you as soon as possible :)
                                </div>
                                <div className={style.contactThankButtonContainer}>
                                    <Link to={"./../../../"}>
                                        <button className={style.contactThankButton}>Return to Home Page</button>
                                    </Link>
                                </div>
                            </div>


                            :
                            <form className={style.form} onSubmit={this.handleSubmit}>
                                {(submitButtonIsClicked && !(inputErrors===0)) &&
                                <div className={style.errorNotification}>
                                    Please, verify your entries.
                                </div>
                                }
                                <input className={style.textInput} type="text" value={this.state.lastNameField}
                                       onChange={this.handleLastNameFieldChange} placeholder="Last Name (Required)"/>
                                <input className={style.textInput} type="email" value={this.state.emailField}
                                       onChange={this.handleEmailFieldChange}
                                       placeholder="Email (Required)"/>
                                <input className={style.textInput} type="text" value={this.state.subjectField}
                                       onChange={this.handleSubjectFieldChange}
                                       placeholder="Subject (Required)"/>
                                <textarea className={style.textInput + " " + style.textarea}
                                          value={this.state.messageField}
                                          onChange={this.handleMessageFieldChange}
                                          placeholder="Message (Required)"/>
                                <div>
                                    <input className={style.submitButton} type="submit" value="Send"/>
                                </div>
                            </form>
                    }
                </MainLayout>
            </PageLayout>
        );
    }
}