import React from "react";
import { Dropdown } from "react-bootstrap";

function BookSession() {
  return (
    <div id="book-session">
      <h2>Book on to a club</h2>
      <Dropdown className="green-gradient">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Choose a club location
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Bradford</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Leeds</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Doncaster</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default BookSession;
