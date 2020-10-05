import React from "react";
import "./message-me.styles.scss";

import InputGroup from "../input-group/input-group.component";

const MessageMe = () => {
  return (
    <form className="message-me">
      <h1>Send Message</h1>

      <InputGroup type="text" id="name" label="name" />
      <InputGroup type="email" id="email" label="email" />
      <InputGroup type="textarea" id="message" label="message" />

      <input type="submit" value="Send"></input>
    </form>
  );
};

export default MessageMe;
