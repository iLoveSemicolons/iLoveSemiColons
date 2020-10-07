import React from 'react';
import style from "./newIdeaBox.module.scss";
import styled from "styled-components";


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


export default class NewIdeaBox extends React.Component {
    constructor(props) {
        super(props);

        this.ideaBoxTitle = props.ideaBoxTitle;

        this.state = {
            ideaField: '',
            emailField: '',
            ideaIsSent: false
        }


        this.handleEmailFieldOnChange = this.handleEmailFieldOnChange.bind(this);
        this.handleIdeaFieldOnChange = this.handleIdeaFieldOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();

        let date = new Date();
        date = date.toISOString().slice(0, 19).replace("T", ' ');

        fetch('http://localhost:9000/newidea', {
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
            .then(response => response.json())
            .catch(error => console.log(error));

        this.setState({ideaIsSent: true});
    }


    handleIdeaFieldOnChange(event) {
        this.setState({ideaField: event.target.value});
    }


    handleEmailFieldOnChange(event) {
        this.setState({emailField: event.target.value});
    }


    render() {
        return (

            <IdeaBoxContainer className={style.ideaBoxContainer}>

                <IdeaBoxTitle className={style.ideaBoxTitle}> {this.ideaBoxTitle} </IdeaBoxTitle>
                <form className={style.ideaBox} onSubmit={this.handleSubmit}>
                    <IdeaTextInput className={style.textInput} value={this.state.ideaField} type="text"
                           onChange={this.handleIdeaFieldOnChange} placeholder="Your idea in a few words ?"/>

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
        );

    }


}