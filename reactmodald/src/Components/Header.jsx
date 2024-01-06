import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='d-flex align-items-center justify-content-center'>
        <Navbar.Brand href="#home">Modal example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Web development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Software development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               System design
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Header