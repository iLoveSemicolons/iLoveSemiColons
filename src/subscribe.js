import React from "react";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import "./subscribe.scss"

export default class Subscribe extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            firstNameValue: '',
            emailValue: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleFirstNameChange(event) {
        this.setState({firstNameValue: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({emailValue: event.target.value});
    }

    render() {

        return (
            <PageLayout>
                <MainLayout>
                        <form className="subscribeBox" onSubmit={this.handleSubmit}>
                            <input className="subscribeBoxTextInput" type="text" placeholder="Un Prénom"
                                   value={this.state.firstNameValue} onChange={this.handleFirstNameChange}/>
                            <input className="subscribeBoxTextInput" type="email" placeholder="Un Mail"
                                   value={this.state.emailValue} onChange={this.handleEmailChange}/>
                            <div className="subscribeButtonContainer">
                                <input className="subscribeButton" type="submit" value="s'abonner"/>
                            </div>
                        </form>
                </MainLayout>
            </PageLayout>
        );
    }


}