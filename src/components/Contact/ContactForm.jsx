import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

function ContactForm() {
  return (
    <>
      <Form>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
          {/* <FormControl /> */}
        </InputGroup>

        <InputGroup className="mt-3 mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Email address</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Message</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>

        <div className="d-flex justify-content-sm-start mt-3">
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        </div>
      </Form>
    </>
  );
}

export default ContactForm;
