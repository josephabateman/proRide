import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import customStyling from "../../styles/custom-styling";

function ContactForm(props) {
  return (
    <>
      <p className="py-3 col-lg-6 m-auto">
        To make a provisional booking for your school, please fill out the
        following form or get in touch through one of the methods above.
      </p>

      {/* <div className="container-fluid" onclick="window.scrollTo(0, 0);">
        <iframe
          onclick="window.scrollTo(0, 0);"
          src="https://forms.wix.com/073b9b2a-1e02-42b9-b998-1e132637fa88:3f570baf-e0a4-42b9-b024-e82047047b67"
          title="Provisional Booking Form"
          height="2360px"
          width="100%"
        ></iframe>
      </div> */}

      <Form onSubmit={props.onSubmit}>
        <p className="py-3 col-lg-6 m-auto">
          For general enquiries, please fill out the following contact form. If
          you would like to request a date for your school, please fill out the
          provisional booking form above.
        </p>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          <InputGroup.Text>Name</InputGroup.Text>
          <FormControl name="name" type="text" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          <InputGroup.Text>School</InputGroup.Text>
          <FormControl name="school" type="text" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          <InputGroup.Text>Your preferred date</InputGroup.Text>

          <FormControl
            name="date"
            type="text"
            placeholder="e.g. Any week day commencing 25/03/23"
          />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          <InputGroup.Text>Postcode</InputGroup.Text>
          <FormControl name="postcode" type="text" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          <InputGroup.Text>Email</InputGroup.Text>
          <FormControl name="email" type="email" />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          <InputGroup.Text style={{ flexShrink: 1 }}>
            Total number of children taking part on the day
          </InputGroup.Text>
          <FormControl
            name="total_number_of_children_taking_part"
            placeholder="e.g. Approximately 60"
          />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          <InputGroup.Text>
            Which classes and how many children are taking part
          </InputGroup.Text>
          <FormControl
            name="num_in_each_class"
            placeholder="e.g. 18 in Nursery, 21 in Reception, 30 in year 1"
          />
        </InputGroup>

        <InputGroup size="sm">
          <InputGroup.Text>Message</InputGroup.Text>
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

      <p className="py-3">
        Alternatively, feel free to get in touch on{" "}
        <a href="tel:+447960534012">07960 534 012</a>
      </p>
    </>
  );
}

export default ContactForm;
