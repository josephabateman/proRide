import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import customStyling from "../../styles/custom-styling";

function ContactForm(props) {
  return (
    <>
      <Form onSubmit={props.onSubmit}>
        <p className="py-3 col-lg-6 m-auto">
          To make a provisional booking for your school, please fill out the
          following form. If you want to send a general email, please fill out
          the contact form at the bottom of the page.
        </p>

        <div className="container-fluid">
          <iframe
            src="https://forms.wix.com/073b9b2a-1e02-42b9-b998-1e132637fa88:3f570baf-e0a4-42b9-b024-e82047047b67"
            title="Provisional Booking Form"
            height="2360px"
            width="100%"
          ></iframe>
        </div>

        <p className="py-3 col-lg-6 m-auto">
          For general enquiries, please fill out the following contact form. If
          you would like to request a date for your school, please fill out the
          provisional booking form above.
        </p>

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
          <InputGroup.Text>Your preferred date</InputGroup.Text>
          {/* </InputGroup.Prepend> */}

          <FormControl
            name="date"
            type="text"
            placeholder="Any week day commencing 25/03/23"
          />
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
            Total number of children taking part on the day
          </InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl
            name="total_number_of_children_taking_part"
            placeholder="Approximately 60"
          />
        </InputGroup>

        <InputGroup
          size="sm"
          className={customStyling.contactFormStyles.emailInput}
        >
          {/* <InputGroup.Prepend> */}
          <InputGroup.Text>
            Which classes and how many children are taking part
          </InputGroup.Text>
          {/* </InputGroup.Prepend> */}
          <FormControl
            name="num_in_each_class"
            placeholder="18 in Nursery, 21 in Reception, 30 in year 1"
          />
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

      <p className="py-3">
        Alternatively, feel free to get in touch on{" "}
        <a href="tel:+447960534012">07960 534 012</a>
      </p>
    </>
  );
}

export default ContactForm;
