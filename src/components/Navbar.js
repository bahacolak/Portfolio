import React from 'react';
import { Container } from 'react-bootstrap';
import logo from "./images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
    <Container fluid>
      <h1>Hello It's React</h1>
      <img src={logo}/>
    </Container>
    </>
  )
}

export default Navbar