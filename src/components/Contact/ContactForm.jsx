import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import customStyling from "../../styles/custom-styling";

function ContactForm(props) {
 

  return (
    <>
     <Form onSubmit={props.onSubmit}>

          <InputGroup>
            {/* <InputGroup.Prepend> */}
              <InputGroup.Text>First and last name</InputGroup.Text>
            {/* </InputGroup.Prepend> */}
            <FormControl name="name" type="text" />
          </InputGroup>

          <InputGroup className={customStyling.contactFormStyles.emailInput}>
            {/* <InputGroup.Prepend> */}
              <InputGroup.Text>Email address</InputGroup.Text>
            {/* </InputGroup.Prepend> */}
            <FormControl name="email" type="email" />
          </InputGroup>

          <InputGroup>
            {/* <InputGroup.Prepend> */}
              <InputGroup.Text>Message</InputGroup.Text>
            {/* </InputGroup.Prepend> */}
            <FormControl
              name="message"
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>

          <div className={customStyling.contactFormStyles.buttonPosition}>
            <Button
              id="submit-button"
              className={customStyling.contactFormStyles.buttonStyle}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
    </>
        
  );
}

export default ContactForm;
