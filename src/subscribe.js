import React from "react";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import styles from "./subscribe.module.scss"
import {Link} from "react-router-dom";


//TODO handling security issues on submit in backend
export default class Subscribe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNameValue: '',
            emailValue: '',
            isSubscribed: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state.isSubscribed);
        this.setState({isSubscribed: true});
        console.log(this.state.isSubscribed);
        event.preventDefault();


        let date = new Date();
         date = date.toISOString().slice(0, 19).replace("T", ' ');
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
                subscriptionDate: date
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

        const isSubscribed = this.state.isSubscribed;
        console.log(isSubscribed);
        return (
            <PageLayout>
                <MainLayout>
                    {isSubscribed
                        ? <div className={styles.subscriberThanksBox}>
                            <div >
                                Merci !, Vous êtes maintenant abonné à mon Newsletter, je ne vais pas vous
                                gêner...promis :)
                            </div>
                            <div className={styles.subscriberThankButtonContainer}>
                                <Link to={"../../"}>
                                <button className={styles.subscriberThankButton}>
                                    Retourner à l'acceuil
                                </button>
                                </Link>
                            </div>

                        </div>

                        : <form className={styles.subscribeBox} onSubmit={this.handleSubmit}>
                            <input className={styles.subscribeBoxTextInput} type="text" placeholder="Un Prénom"
                                   value={this.state.firstNameValue} onChange={this.handleFirstNameChange}/>
                            <input className={styles.subscribeBoxTextInput} type="email" placeholder="Un Mail"
                                   value={this.state.emailValue} onChange={this.handleEmailChange}/>
                            <div className={styles.subscribeButtonContainer}>
                                <input className={styles.subscribeButton} type="submit" value="S'abonner"/>
                            </div>
                        </form>
                    }
                </MainLayout>
            </PageLayout>
        );
    }


}