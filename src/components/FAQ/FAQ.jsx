import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function FAQ() {
  return (
    <>
      <h1 className="my-4">
        FAQs
      </h1>
      <div id="balance_bike_faqs">
        <Accordion className="m-lg-5 container-lg bg-light p-3">
          <h3 className="">Balance Bike Session FAQs</h3>
          <Accordion.Item eventKey="0" className="border-0">
            <Accordion.Header>
              <span className="ml-auto">
                How many children can take part in a day?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Our usual day caters for up to 60 children in four one hour
              sessions, however extra sessions can be added by reducing the
              duration of sessions. Our standard charges cater for up to 60, 75
              or 90 children. Please see the current price list.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="border-0">
            <Accordion.Header>
              <div className="ml-auto">What ages are catered for?</div>
            </Accordion.Header>
            <Accordion.Body>
              We run balance bike sessions for all FS/KS1 classes from Nursery
              to Year Two. All equipment is provided for up to and including
              year one, whilst year 2 bring in their own bikes. We can provide
              larger balance bikes that convert to pedal bikes for year 2 if
              they are needed but these are subject to availability and carry an
              additional hire charge.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="border-0">
            <Accordion.Header>
              <div className="ml-auto">
                Some of our children can already ride a pedal bike, can they
                take part in the sessions?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Yes, absolutely, those who have recently learned to pedal still
              enjoy taking part in the sessions and always develop new skills
              and greater confidence that can then be applied to their riding
              once they return to their pedal bike.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="border-0">
            <Accordion.Header>
              <div className="ml-auto">
                Do you provide the bikes or do the children need to bring their
                own?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Yes, we provide everything needed for the sessions so children
              simply rock-up to their sessions and we take it from there. No
              special clothing or footwear is needed. In particularly cold
              weather we do however advise the children wear gloves if possible.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="border-0">
            <Accordion.Header>
              <div className="ml-auto">
                Do you run sessions for children that can already ride a bike?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Yes, our "Beginner" sessions are designed specifically for this
              purpose. We offer a one-day beginner program for up to 60 children
              aimed at helping them transition from balance bike to pedal bike.
              Intended for Years 1 and 2, the day is split into groups of 10
              where the children are taught how to control, balance and pedal
              using special convertible bikes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="border-0">
            <Accordion.Header>
              <div className="ml-auto">
                How do I book a balance bike day for my school?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              You can check availability and reserve a date online by going to
              the bookings page on this website and filling out a booking
              request form. Once your form is received, we will plan your
              sessions and send you a booking form with a suggested outline for
              your visit. You will then have two weeks to sign and return or
              amend your booking (minor changes to session timings and group
              numbers can be made in the days prior to the visit). No payment is
              taken prior to the visit but late cancellations will incur a
              penalty, details of which are outlined in terms attached to your
              booking confirmation.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="border-0">
            <Accordion.Header>
              <div className="ml-auto">
                Can I change my date once I've booked?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              If you are unable to go ahead with your planned visit, we will try
              to arrange an alternative date providing we have at least 30 days
              notice. Last minute cancellations will usually incur penalty
              charges as it may not be possible to fill your booking.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FAQ;
