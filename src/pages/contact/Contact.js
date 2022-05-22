import React, { useRef, useState } from 'react';
import "./Contact.css";
import FormInput from "./FormInput";

function Contact() {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    }
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
    <div className='contact'>
      <div className="container">
        <h1>Contact me</h1>
        <p>I am looking for an internship cause of I want to improve myself in the field of coding.
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact