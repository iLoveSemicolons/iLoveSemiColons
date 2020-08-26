import React from "react";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import styles from "./subscribe.module.scss"


//handling security issues on submit in backend
export default class Subscribe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNameValue: '',
            emailValue: '',
            submit : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();


        let date  = new Date();
        date = date.toISOString().slice(0,19).replace("T",' ');
   //     https://www.geeksforgeeks.org/how-to-convert-javascript-datetime-to-mysql-datetime/

        fetch('http://localhost:9000/subscribe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstNameValue,
                email: this.state.emailValue,
                subscriptionDate : date
            })
        })
            .then(res => res.json())
            .catch(err => console.log(err));

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
                        <form className={styles.subscribeBox} onSubmit={this.handleSubmit}>
                            <input className={styles.subscribeBoxTextInput} type="text" placeholder="Un Prénom"
                                   value={this.state.firstNameValue} onChange={this.handleFirstNameChange}/>
                            <input className={styles.subscribeBoxTextInput} type="email" placeholder="Un Mail"
                                   value={this.state.emailValue} onChange={this.handleEmailChange}/>
                            <div className={styles.subscribeButtonContainer}>
                                <input className={styles.subscribeButton} type="submit" value="S'abonner"/>
                            </div>
                        </form>
                </MainLayout>
            </PageLayout>
        );
    }


}