//this page is not in use

import React from "react";
import { Dropdown } from "react-bootstrap";

function BookSession() {
  return (
    <div id="book-session">
      <h3 className="font-weight-light">Book on to a club</h3>
      <Dropdown className="green-gradient">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Choose club location
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" key="1">
            Bradford
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" key="2">
            Leeds
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" key="3">
            Doncaster
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default BookSession;
