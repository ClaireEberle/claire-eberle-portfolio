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
  const [nameForm, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('')

  const handleFormChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;
    

    if (inputType === "nameForm") {
      setName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "message") {
      setMessage(inputValue);
    }
  };

const handleFormSubmit = (e) => {
  e.preventDefault()
  if(!validateEmail(email)){
    setErrorMessage(
      `Please enter a valid email address`
    );
  }
  if(!nameForm){
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

    return <Contact handleFormChange={handleFormChange} nameForm={nameForm} email={email} message={message} handleFormSubmit={handleFormSubmit} errorMessage={errorMessage}/>;
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
