import React, { useRef, useState } from 'react';
import "./Contact.css";
import FormInput from "./FormInput";

function Contact() {
  // const [username, setUsername] = useState("")
  const usernameRef = useRef()

  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(usernameRef)
  }
  return (
    <div className='contact'>
      <div className="container">
        <h1>Contact me</h1>
        <p>I am looking for an internship because I want to improve myself in the field of coding.
        However, if you have other request or question, don’t hesitate to use the form.
        </p>
        <form onSubmit={handleSubmit}>
          <FormInput refer={usernameRef} placeholder="username" />
          <FormInput placeholder="Email" />
          <FormInput placeholder="Full Name" />
          <FormInput placeholder="Smth Else" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact