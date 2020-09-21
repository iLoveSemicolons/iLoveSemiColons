import React from 'react';
import style from "./newIdeaBox.module.scss";

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
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' :'application/json'
            },
            body : JSON.stringify({
                idea : this.state.ideaField,
                email : this.state.emailField,
                date : date
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

            <div className={style.ideaBoxContainer}>

                <div className={style.ideaBoxTitle}> {this.ideaBoxTitle} </div>
                <form className={style.ideaBox} onSubmit={this.handleSubmit}>
                    <input className={style.textInput} value={this.state.ideaField} type="text"
                            onChange={this.handleIdeaFieldOnChange} placeholder="Votre Idée en quelques mots ?"/>

                    <div className={style.ideaBoxBottomContainer}>
                        <input className={style.textInput + " " + style.emailField}
                               value={this.state.emailField} type="email"
                               onChange={this.handleEmailFieldOnChange}
                               placeholder="Votre email"/>
                        <div className={style.submitButtonContainer}>
                            <input className={style.submitButton} type="submit" value="Envoyer"/>
                        </div>
                    </div>
                </form>
            </div>
        );

    }


}