import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="logo" href="/"><span id="logo-pro">Pro</span><span id="logo-ride" className="text-primary">Ride </span><i className="fas fa-biking text-primary"></i><span id="logo-b" className="d-block logo-b">Cycling For Schools</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                {/* <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/aboutPhil">About Phil</Nav.Link> */}
                <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/about">About ProRide</NavDropdown.Item>
                    <NavDropdown.Item href="/aboutPhil">About Phil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

  export default NavBar;