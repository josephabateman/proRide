import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../static/images/logo.png";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="md">
        <Nav.Link className="d-inline-block" href="#/">
          <Navbar.Brand className="logo d-inline-block">
            <img src={logo} />
          </Navbar.Brand>
        </Nav.Link>

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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
