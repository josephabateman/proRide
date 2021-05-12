import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  Button,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap";
import servicesData from "../data/services";
import logo from "../static/images/logo.png";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Navbar.Brand className="logo" href="/">
          {/* <span id="logo-pro">Pro</span>
          <span id="logo-ride" className="text-primary">
            Ride{" "}
          </span>
          <i className="fas fa-biking text-primary"></i>
          <span id="logo-b" className="d-block logo-b">
            Cycling For Schools
          </span> */}
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            {/* <NavDropdown title="" id="basic-nav-dropdown">
              <Container fluid>
                <Row>
                  {servicesData.map((service, key) => {
                    return (
                      <Col>
                        <NavDropdown.Item
                          href={`/${service.name.replace(/[()\s+]/g, "")}`}
                          key={key}
                        >
                          {service.name}
                        </NavDropdown.Item>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </NavDropdown> */}
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

            <Nav.Link href="/contact">Contact</Nav.Link>
            {/* <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/aboutPhil">About Phil</Nav.Link> */}
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutProRide">
                About ProRide
              </NavDropdown.Item>
              <NavDropdown.Item href="/aboutPhil">About Phil</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
