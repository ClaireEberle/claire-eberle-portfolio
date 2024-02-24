import React, { useState, useRef } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";

export const Contact = ({
  handleFormChange,
  nameForm,
  email,
  message,
  handleFormSubmit,
  errorMessage,
  handleLoseFocus,
  blank,
}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    handleFormSubmit();

    emailjs
      .sendForm("service_g3nkj8m", "template_4j20o3t", form.current, {
        publicKey: "7fb_WEfwrCLJjXJZx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-form-box contactId">Contact me:</h1>
        <form
          ref={form}
          className="contact-form-box"
          onSubmit={sendEmail}
          // method="POST"
        >
          <label for="name">Name:</label>
          <br />
          <input
            name="name"
            type="text"
            onBlur={handleLoseFocus}
            value={nameForm}
            onChange={handleFormChange}
          />
          {blank.name ? <p>please enter your name</p> : null}
          <br />
          <label for="email">Email:</label>
          <br />
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleFormChange}
            onBlur={handleLoseFocus}
          />
          {blank.email ? <p>please enter your email</p> : null}
          <br />
          <label for="message">Message:</label>
          <br />
          <textarea
            name="message"
            placeholder="Write Your message "
            cols="30"
            rows="10"
            value={message}
            onChange={handleFormChange}
            onBlur={handleLoseFocus}
          />
          {blank.message ? <p>please enter a message</p> : null}
          <br />
          <button type="submit" className="button-33">
            Submit
          </button>
        </form>
        {/* <p>{errorMessage}</p> */}
      </div>
    </div>
  );
};
