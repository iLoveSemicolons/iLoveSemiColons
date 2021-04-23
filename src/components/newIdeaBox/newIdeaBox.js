import React from 'react';
import style from "./newIdeaBox.module.scss";
import styled from "styled-components";
import toBeUsedAddress from "../../config/globalIP";

const IdeaBoxContainer = styled.div`
background-color : ${({theme}) => theme.ideaBoxContainerBackgroundColor};
`;

const IdeaBoxTitle = styled.div`
color : ${({theme}) => theme.ideaBoxTitleTextColor};
`;


const IdeaTextInput = styled.input`
background-color : ${({theme}) => theme.ideaBoxTextInputBackgroundColor};
color : ${({theme}) => theme.ideaBoxTextInputColor};
border-color : ${({theme}) => theme.ideaBoxTextInputBorderColor};

&::place-holder  : {
color : ${({theme}) => theme.ideaTextInputPlaceholderColor};
}
`;





const IdeaThanksBox = styled.div`
        background-color : ${({theme}) => theme.IdeaThanksBoxBackgroundColor};
        color : ${({theme}) => theme.IdeaThanksBoxBoxTextColor};
        `


export default class NewIdeaBox extends React.Component {
    constructor(props) {
        super(props);

        this.ideaBoxTitle = props.ideaBoxTitle;

        this.state = {
            ideaField: '',
            emailField: '',
            ideaIsSent: false,

            error: 0,
            submitButtonIsClicked: false,


        }


        this.handleEmailFieldOnChange = this.handleEmailFieldOnChange.bind(this);
        this.handleIdeaFieldOnChange = this.handleIdeaFieldOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.checkInputEmail = this.checkInputEmail.bind(this);
        this.checkInputRequired = this.checkInputRequired.bind(this);
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


    handleSubmit(event) {
        event.preventDefault();

        let date = new Date();
        date = date.toISOString().slice(0, 19).replace("T", ' ');


        this.setState({submitButtonIsClicked: true});


        const submitAfterValidation = async () => {
            await this.checkInputEmail(this.state.emailField);
            await this.checkInputRequired(this.state.emailField);
            await this.checkInputRequired(this.state.ideaField);


            if (this.state.error === 0) {
                fetch(toBeUsedAddress.address+"/newidea", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        idea: this.state.ideaField,
                        email: this.state.emailField,
                        date: date
                    })
                })
                    .then((response) => {
                        this.setState({ideaIsSent: true});
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


    handleIdeaFieldOnChange(event) {
        this.setState({ideaField: event.target.value});
    }


    handleEmailFieldOnChange(event) {
        this.setState({emailField: event.target.value});
    }

    pageReload(){
        window.location.reload();
    }


    render() {

        const formIsSent = this.state.ideaIsSent;
        const submitButtonIsClicked = this.state.submitButtonIsClicked;
        const inputErrors = this.state.error;


        return (
            <div>
                {
                    formIsSent
                        ? <IdeaThanksBox className={style.contactThanksBox}>
                            <div>
                                Thank you for sharing your idea :), i will get back to you as soon as possible.
                            </div>
                            <div className={style.contactThankButtonContainer}>
                                <button onClick={this.pageReload} className={style.contactThankButton}>Another idea ? , Click me !</button>
                            </div>
                        </IdeaThanksBox>


                        :
                        <IdeaBoxContainer className={style.ideaBoxContainer}>
                            {(submitButtonIsClicked && !(inputErrors === 0)) &&
                            <div className={style.errorNotification}>
                                Please, verify your entries.
                            </div>
                            }

                            <IdeaBoxTitle className={style.ideaBoxTitle}> {this.ideaBoxTitle} Say that loud ! </IdeaBoxTitle>
                            <form className={style.ideaBox} onSubmit={this.handleSubmit}>
                                <IdeaTextInput className={style.textInput} value={this.state.ideaField} type="text"
                                               onChange={this.handleIdeaFieldOnChange}
                                               placeholder="Your idea in a few words ?"/>

                                <div className={style.ideaBoxBottomContainer}>
                                    <IdeaTextInput className={style.textInput + " " + style.emailField}
                                                   value={this.state.emailField} type="email"
                                                   onChange={this.handleEmailFieldOnChange}
                                                   placeholder="Your email"/>
                                    <div className={style.submitButtonContainer}>
                                        <input className={style.submitButton} type="submit" value="Send"/>
                                    </div>
                                </div>
                            </form>
                        </IdeaBoxContainer>

                }
            </div>
        );

    }


}