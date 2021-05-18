import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import SuccessPage from "./SuccessPage";
import emailjs from "emailjs-com";
import customStyling from "../../styles/custom-styling";

function ContactForm() {
  const [form, updateForm] = useState(false);

  const service_id = "proridecoaching";
  const template_id = "proridetemplate";
  const user_id = "user_rhsl2oZqwgrD38edYovoz";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    updateForm(true);
    e.target.reset();
  }

  return (
    <>
      {!form ? (
        <Form onSubmit={sendEmail}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>First and last name</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control name="name" type="text" />
          </InputGroup>

          <InputGroup className={customStyling.contactFormStyles.emailInput}>
            <InputGroup.Prepend>
              <InputGroup.Text>Email address</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control name="email" type="email" />
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Message</InputGroup.Text>
            </InputGroup.Prepend>
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
      ) : (
        <SuccessPage />
      )}
    </>
  );
}

export default ContactForm;
