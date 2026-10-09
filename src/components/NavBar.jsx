import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="md" sticky="top" className="site-navbar">
        <Navbar.Brand as={Link} to="/" className="logo">
          <Logo height={54} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" eventKey="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about" eventKey="/about">
                About Pro Ride
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/phil-bateman" eventKey="/about/phil-bateman">
                About Phil
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/faq" eventKey="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/jobs" eventKey="/jobs">Jobs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
