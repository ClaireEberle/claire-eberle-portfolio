import React, { useState } from "react";
import "./style.css";

export const Contact = ({
  handleFormChange,
  nameForm,
  email,
  message,
  handleFormSubmit,
  errorMessage,
  handleLoseFocus,
  blank
}) => {
  

  return (
    <div className="contact-box">
      <h1 className="contact-form-box contactId">Contact me:</h1>
      <form className="contact-form-box" onSubmit={handleFormSubmit}>
        <label for="name">Name:</label>
        <br />
        <input
          name="name"
          type="text"
          onBlur={handleLoseFocus}
          value={nameForm}
          onChange={handleFormChange}
        />
        { blank.name ? (
        <p>
          please enter your name
        </p>
) : (null)}
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
         { blank.email ? (
        <p>
          please enter your email
        </p>
) : (null)}
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
         { blank.message ? (
        <p>
          please enter a message
        </p>
) : (null)}
        <br />
        <button>Submit</button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
};
