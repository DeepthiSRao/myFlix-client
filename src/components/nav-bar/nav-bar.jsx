import React from 'react';
import { Container,
         Navbar,
         Nav } from 'react-bootstrap';

const MyNavbar = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">MyFlix</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#user">Profile</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
 
export default MyNavbar;