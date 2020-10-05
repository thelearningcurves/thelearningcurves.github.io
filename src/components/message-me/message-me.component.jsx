import React from "react";
import "./message-me.styles.scss";

import emailjs from "emailjs-com";
import InputGroup from "../input-group/input-group.component";
class MessageMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_1zv2f0o",
        event.target,
        "user_VKaK4sHhhrlfmFVErKyXs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for Messaging");
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.message.value = "";
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form className="message-me" onSubmit={this.handleSubmit}>
        <h1>Send Message</h1>

        <InputGroup
          type="text"
          id="name"
          label="name"
          name="user_name"
          handleChange={this.handleChange}
        />
        <InputGroup
          type="email"
          id="email"
          label="email"
          name="user_email"
          handleChange={this.handleChange}
        />
        <InputGroup
          type="textarea"
          id="message"
          label="message"
          name="message"
          handleChange={this.handleChange}
        />

        <input type="submit" value="Send"></input>
      </form>
    );
  }
}

export default MessageMe;
