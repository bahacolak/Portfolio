import React, { useRef, useState } from 'react';
import "./Contact.css";
import FormInput from "./FormInput";
import {motion} from "framer-motion";


function Contact() {
  const [values, setValues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    subject:"",
    message:"",
  });
  
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage:"It shouldn't be empty",
      label: "First Name",
      className: "firstname",
      required:true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      errorMessage:"It shouldn't be empty",
      label: "Last Name",
      className: "lastname",
      required:true,

    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"It should be a valid email adress",
      label: "Email",
      className:"email",
      required:true,

    },
    {
      id: 4,
      name: "subject",
      type: "text",
      placeholder: "Subject",
      errorMessage:"It shouldn't be empty",
      label: "Subject",
      className: "subject",
      required:true,

    },
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  const onChange = (e) =>{
     setValues({...values, [e.target.name]: e.target.value});
  }

  console.log(values);

  return (
    <motion.div className='contact' 
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    
    >
      <div className="container">
        <h1>Contact me</h1>
        <p>I am looking for an job cause of I want to improve myself in the field of coding.
        However, if you have other request or question, don’t hesitate to use the form.
        </p>
        <form onSubmit={handleSubmit}>
        
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}  
        <div className="textarea">
          <textarea name="message" placeholder="Message" required></textarea>
        </div>         
          <button>Send Message!</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact