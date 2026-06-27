import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "./Logo";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="md" sticky="top" className="site-navbar">
        <Navbar.Brand className="logo" href="#/">
          <Logo height={54} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/services">Services</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#aboutProRide">
                About ProRide
              </NavDropdown.Item>
              <NavDropdown.Item href="#aboutPhil">About Phil</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/faq">FAQ</Nav.Link>
            <Nav.Link href="#/jobs">Jobs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
