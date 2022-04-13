import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../static/images/logo.png";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="md">
        <Navbar.Brand className="mr-auto" className="logo" href="#/">
          <Image src={logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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
