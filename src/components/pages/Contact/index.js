import React from 'react'
import "./style.css"

export const Contact = ({handleFormChange, nameForm, email, message, handleFormSubmit, errorMessage}) => {
  return (
    <div className='contact-box'>

    <h1 className='contact-form-box contactId'>Contact me:</h1>
    <form className='contact-form-box' onSubmit={handleFormSubmit}>
      <label for="nameForm">Name:</label><br/>
        <input name='nameForm' type='text'  
        value={nameForm} 
        onChange={handleFormChange} 
        />
        <br/>
        <label for="email">Email:</label><br/>
        <input name='email' type='email'
         value={email} 
         onChange={handleFormChange}
         />
        <br/>
        <label for="message">Message:</label><br/>
        <textarea  name='message' placeholder='Write Your message ' cols="30" rows="10"
         value={message} 
         onChange={handleFormChange}
         />
        <br/>
        <button>Submit</button> 
    </form>
    <p>{errorMessage}</p>
    </div> 
  )
}
