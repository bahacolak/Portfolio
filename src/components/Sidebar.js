import React from 'react';
import { Nav, NavLink, Container, Navbar, Link} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink as={Link} to="/">Home</NavLink>
      <NavLink as={Link} to="/About">About</NavLink>
      <NavLink as={Link} to="/MySkills">My skills</NavLink>
      <NavLink as={Link} to="/Contact">Contact</NavLink>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Sidebar