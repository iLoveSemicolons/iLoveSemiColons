/* import React from "react";
import toBeUsedAddress from "./components/globalIP";
import { FormRiderjs } from "formriderjs";

export default class TestFormRider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameValue: "",
      emailValue: "",
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    new FormRiderjs();
  }

  handleFirstNameChange(event) {
    this.setState({ firstNameValue: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ emailValue: event.target.value });
  }





  handleSubmit(event) {

    event.preventDefault();

    window.setTimeout(() => {

      let status = FormRiderjs.getValidationStatus();
      console.log(status);
      if (status === true) {
        fetch(toBeUsedAddress.address + "/subscribe", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.state.firstNameValue,
            email: this.state.emailValue,
            subscriptionDate: "2021-02-06 10:25:24",
          }),
        })
          .then((response) => response.json())
          .catch((err) => console.log(err));
      }
    }, 200);
  }

  render() {
    return (
      <div>
        <form
          style={{ marginTop: 100 + "px" }}
          data-frform="subscribeForm"
          onSubmit={this.handleSubmit}
        >
          <input
            data-name={"firstName"}
            type={"text"}
            placeholder={"first name"}
            value={this.state.firstNameValue}
            onChange={this.handleFirstNameChange}
          />{" "}
          <input
            data-name={"email"}
            type={"text"}
            placeholder={"email"}
            value={this.state.emailValue}
            onChange={this.handleEmailChange}
          />{" "}
          <input type={"submit"} value={"subscribe"} />{" "}
        </form>{" "}
      </div>
    );
  }
}
 */