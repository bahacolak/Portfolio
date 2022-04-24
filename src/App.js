import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Nav, NavLink, Container, Navbar} from 'react-bootstrap';



//pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import MySkills from './components/pages/MySkills';
import Contact from './components/pages/Contact';
import logo from "./components/images/logo.png";

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
      <Navbar bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand as={Link} to="/"><img src={logo} className="img1" /></Navbar.Brand>
    <Nav className="me-auto">
      <NavLink as={Link} to="/">Home</NavLink>
      <NavLink as={Link} to="/About">About</NavLink>
      <NavLink as={Link} to="/MySkills">My skills</NavLink>
      <NavLink as={Link} to="/Contact">Contact</NavLink>
    </Nav>
    </Container>
  </Navbar>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='About' element={<About />}/>
        <Route path="MySkills" element={<MySkills />}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>     
    </>
  );
}

export default App;
