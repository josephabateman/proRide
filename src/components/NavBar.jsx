import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../static/images/logo.png";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        {/* <Link to="/"> */}
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
        {/* </Link> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">
              Home
              {/* <Link to="/">Home</Link> */}
            </Nav.Link>
            <Nav.Link href="#/services">
              {/* <Link to="/services">Services</Link> */}
              Services
            </Nav.Link>
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
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            <Nav.Link href="#/contact">
              {/* <Link to="/contact">Contact</Link> */}
              Contact
            </Nav.Link>
            {/* <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/aboutPhil">About Phil</Nav.Link> */}
            <NavDropdown title="About" id="basic-nav-dropdown">
              {/* <Link className="d-block pl-3" to="/aboutProRide">
                About ProRide
              </Link> */}
              <NavDropdown.Item href="#aboutProRide">
                About ProRide
              </NavDropdown.Item>
              <NavDropdown.Item href="#aboutPhil">About Phil</NavDropdown.Item>

              {/* <Link className="d-block pl-3 pt-2" to="/aboutPhil">
                About Phil
              </Link> */}
              {/* <NavDropdown.Divider /> */}
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
