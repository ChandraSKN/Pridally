import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppNavbar.css'; // New custom CSS for navbar

function AppNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {/* Replace with a logo image if desired:
              <img src="/path-to-logo.png" alt="Pridally" className="logo" /> */}
          Pridally
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/we-offer">Features</Nav.Link>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Button as={Link} to="/signup" variant="primary" className="ms-3">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
