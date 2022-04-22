import React from 'react';
import { Container, Nav, NavLink} from 'react-bootstrap';
import logo from "./images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
        <img className='logo--img' src={logo}/>
        <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <NavLink eventKey="link-3">My Skills</NavLink>
            </Nav.Item>
            </Nav>
    </>
  )
}

export default Navbar