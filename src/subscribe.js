import React from "react";
import styles from "./subscribe.module.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import style from "./contact.module.scss";
import SocialNetworkingContainer from "./components/socialNetworkingContainer/socialNetworkingContainer";
import toBeUsedAddress from "./components/globalIP";
import PageTitle from "./components/pageTitle/pageTitle";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";

const SubscriberThankBox = styled.div`
  background-color: ${({ theme }) => theme.subscriberThankBoxBackgroundColor};
  color: ${({ theme }) => theme.subscriberThankBoxTextColor};
`;

const SubscribeBox = styled.form`
  background-color: ${({ theme }) => theme.subscribeBoxBackgroundColor};
`;

const SubscribeBoxTextInput = styled.input`
  background-color: ${({ theme }) =>
    theme.subscribeBoxTextInputBackgroundColor};
  color: ${({ theme }) => theme.subscribeBoxTextInputColor};
  &::placeholder : {
    color: ${({ theme }) => theme.subscribeBoxTextInputPlaceholderColor};
  }
`;

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameValue: "",
      emailValue: "",
      isSubscribed: false,

      error: 0,
      formIsSent: false,
      submitButtonIsClicked: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.checkInputRequired = this.checkInputRequired.bind(this);
    this.checkInputEmail = this.checkInputEmail.bind(this);
  }




  handleSubmit(event) {
    event.preventDefault();
    let date = new Date();
    date = date.toISOString().slice(0, 19).replace("T", " ");

    //setting state submitButtonIsClicked because it is going to be used later in order to show the message error.
    this.setState({ submitButtonIsClicked: true });

    const inputValidationOnSubmit = async () => {
      await this.checkInputEmail(this.state.emailValue);
      await this.checkInputRequired(this.state.emailValue);
      await this.checkInputRequired(this.state.firstNameValue);

      if (this.state.error === 0) {
        fetch(toBeUsedAddress.address + "/subscribe", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*"
          },
          body: JSON.stringify({
            firstName: this.state.firstNameValue,
            email: this.state.emailValue,
            subscriptionDate: date,
          }),
        })
          .then((response) => {
            //setting isSubscribed to true in order to show the thanks message
            this.setState({ isSubscribed: true });
            return response;
          })
          .then((response) => response.json())
          .catch((err) => console.log(err));
      }
    };

    inputValidationOnSubmit().catch(function (error) {
      console.log(error);
    });

    //resetting error state to 0 after submitting !
    this.setState({ error: 0 });
  }

  handleFirstNameChange(event) {
    this.setState({ firstNameValue: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ emailValue: event.target.value });
  }

  //=== VALIDATION =========================================================

  checkInputRequired(inputValue) {
    let regex = /^\s+/;
    if (regex.test(String(inputValue)) || inputValue.length === 0) {
      this.setState({ error: this.state.error + 1 });
    } else if (typeof inputValue === "undefined") {
      this.setState({ error: this.state.error + 1 });
    } else {
      this.setState({ error: this.state.error });
    }
  }

  checkInputEmail(inputValue) {
    let regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(String(inputValue).toLowerCase())) {
      this.setState({ error: this.state.error + 1 });
    } else {
      this.setState({ error: this.state.error });
    }
  }

  //==================================================================

  render() {
    const isSubscribed = this.state.isSubscribed;
    const submitButtonIsClicked = this.state.submitButtonIsClicked;
    const inputErrors = this.state.error;

    return (
      <PageLayout>
        <MainLayout>
          <Helmet>
            <title>
              {" "}
              Subscribe and get weekly updated about web development{" "}
            </title>
          </Helmet>
          <PageTitle title={"Subscribe"} />
          {isSubscribed ? (
            <SubscriberThankBox className={styles.subscriberThanksBox}>
              <div>
                Thank you for subscribing to my newsletter.this means a lot to
                me: ){" "}
              </div>{" "}
              <div className={styles.subscriberThankButtonContainer}>
                <Link to={"./../../../"}>
                  <button className={styles.subscriberThankButton}>
                    Return to Home page{" "}
                  </button>{" "}
                </Link>{" "}
              </div>
            </SubscriberThankBox>
          ) : (
              <SubscribeBox
                data-frform="subscribeForm"
                className={styles.subscribeBox}
                onSubmit={this.handleSubmit}
              >
                {submitButtonIsClicked && !(inputErrors === 0) && (
                  <div className={style.errorNotification}>
                    Please, verify your entries.{" "}
                  </div>
                )}

                <SubscribeBoxTextInput
                  className={styles.subscribeBoxTextInput}
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstNameValue}
                  onChange={this.handleFirstNameChange}
                  data-name="firstName"
                />
                <SubscribeBoxTextInput
                  className={styles.subscribeBoxTextInput}
                  placeholder="Email"
                  value={this.state.emailValue}
                  onChange={this.handleEmailChange}
                  data-name="email"
                />
                <div className={styles.subscribeButtonContainer}>
                  <input
                    className={styles.subscribeButton}
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </SubscribeBox>
            )}{" "}
          <SocialNetworkingContainer />
        </MainLayout>{" "}
      </PageLayout>
    );
  }
}
