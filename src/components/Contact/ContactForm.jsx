import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import customStyling from "../../styles/custom-styling";

function ContactForm(props) {
  return (
    <>
      <Form onSubmit={props.onSubmit}>
        <p className="text-left py-3">
          To make an enquiry, a booking or to check availability, please
          complete the form below and we will be in touch asap
        </p>

        {/* Name:
          Job title:
          School:
          Postcode
          Email:
          Message: */}

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          {/* <InputGroup.Prepend> */}
          <InputGroup.Text>Name</InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl name="name" type="text" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          {/* <InputGroup.Prepend> */}
          <InputGroup.Text>School</InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl name="school" type="text" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          {/* <InputGroup.Prepend> */}
          <InputGroup.Text>Postcode</InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl name="postcode" type="text" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          {/* <InputGroup.Prepend> */}
          <InputGroup.Text>Email</InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl name="email" type="email" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          {/* <InputGroup.Prepend> */}
          <InputGroup.Text style={{ flexShrink: 1 }}>
            Total number of children taking part (all classes)
          </InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl
            name="total_number_of_children_taking_part"
            type="number"
          />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          {/* <InputGroup.Prepend> */}
          <InputGroup.Text>
            Approximate number of children per class:
          </InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl name="num_in_each_class" type="number" />
        </InputGroup>

        <InputGroup size="sm">
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
