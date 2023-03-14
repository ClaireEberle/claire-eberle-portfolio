import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { About } from "../pages/About";
import { Portfolio } from "../pages/Portfolio";
import { Resume } from "../pages/Resume";
import { Contact } from "../pages/Contact";
import { validateEmail } from "../../utils/helpers";
import { Cards } from "../Cards"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('')
  const [blank, setBlank] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFormChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;
    

    if (inputType === "name") {
      setName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "message") {
      setMessage(inputValue);
    }
    setBlank({...blank, [inputType]:false})
    console.log(blank)
  };

  

  const handleLoseFocus = (e) => {
    const field = e.target.name
    const value = e.target.value
    console.log(`lost focus of ${e.target.name}`);
    if(value ==""){
      setBlank({...blank, [field]:true})
    }
      console.log(blank)
      console.log(field)
  
  };

const handleFormSubmit = (e) => {
  e.preventDefault()
  if(!validateEmail(email)){
    setErrorMessage(
      `Please enter a valid email address`
    );
  }
  if(!name){
    setErrorMessage(
      `Please enter a name`
    )
  }
  if(!message){
    setErrorMessage(
    'Please enter a message'
    )
  }
  console.log("Submitted")
  
}

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />; 
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }

    return <Contact handleFormChange={handleFormChange} blank={blank} handleLoseFocus={handleLoseFocus} name={name} email={email} message={message} handleFormSubmit={handleFormSubmit} errorMessage={errorMessage}/>;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
