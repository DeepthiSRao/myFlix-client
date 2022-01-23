import React from 'react';
import { NavLink } from "react-router-dom";

import logo from './logo.png';
import { Navbar,
         Nav,
         Container } from 'react-bootstrap';

import './nav-bar.scss';

const MyNavbar = ({user}) => {
    const onLoggedOut = () =>{
        localStorage.clear();
        window.open("/","_self");
    }
    
    return ( 
        <Navbar variant="dark" expand="lg" className="navbar w-12 pb-2">
            <Container fluid>
                <Navbar.Brand href="/" className="navbar-logo me-auto">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={`/profile`}>Profile</Nav.Link>
                    <Nav.Link onClick={() => onLoggedOut()}>Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    );
}
 
export default MyNavbar;