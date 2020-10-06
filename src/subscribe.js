import React from "react";
import styles from "./subscribe.module.scss"
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {Helmet} from "react-helmet";

//TODO handling security issues on submit in backend.
//TODO handling required.

const SubscriberThankBox = styled.div`
background-color : ${({theme}) => theme.subscriberThankBoxBackgroundColor};
color : ${({theme}) => theme.subscriberThankBoxTextColor};
`;


const SubscribeBox = styled.form`
background-color : ${({theme}) => theme.subscribeBoxBackgroundColor};
`;

const SubscribeBoxTextInput = styled.input`
background-color : ${({theme}) => theme.subscribeBoxTextInputBackgroundColor};
color : ${({theme}) => theme.subscribeBoxTextInputColor};


&::placeholder : {
color : ${({theme}) => theme.subscribeBoxTextInputPlaceholderColor};


}


`;


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
        this.setState({isSubscribed: true});
        event.preventDefault();
        let date = new Date();
        date = date.toISOString().slice(0, 19).replace("T", ' ');

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
            <div>
                <Helmet>
                    <title>Subscribe</title>
                    <meta name={"description"}
                          content={"Subscribe to my newsletter and receive my weekly article and programming projects updates."}/>
                    <meta name={"keywords"}
                          content={"Open Source newsletter, RSS feeds, email, Open Source, newsletter, subscribe Open Source, Subscribe, ilovesemicolons, I love semicolons, open source articles, articles, week, technology, posts, interesting articles"}/>
                </Helmet>


                {isSubscribed
                    ? <SubscriberThankBox className={styles.subscriberThanksBox}>
                        <div>
                            Thank you for subscribing to my newsletter. this means a lot to me :)
                        </div>
                        <div className={styles.subscriberThankButtonContainer}>
                            <Link to={"../../"}>
                                <button className={styles.subscriberThankButton}>
                                    Return to Home page
                                </button>
                            </Link>
                        </div>

                    </SubscriberThankBox>

                    : <SubscribeBox className={styles.subscribeBox} onSubmit={this.handleSubmit}>
                        <SubscribeBoxTextInput className={styles.subscribeBoxTextInput} type="text"
                                               placeholder="Un Prénom"
                                               value={this.state.firstNameValue} onChange={this.handleFirstNameChange}/>
                        <SubscribeBoxTextInput className={styles.subscribeBoxTextInput} type="email"
                                               placeholder="Un Mail"
                                               value={this.state.emailValue} onChange={this.handleEmailChange}/>
                        <div className={styles.subscribeButtonContainer}>
                            <input className={styles.subscribeButton} type="submit" value="Subscribe"/>
                        </div>
                    </SubscribeBox>
                }
            </div>
        );
    }


}