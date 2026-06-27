import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seo from "../Seo";

const generalFaqs = [
  {
    q: "What does Pro Ride Coaching offer schools?",
    a: "We run fun, professionally coached cycling days for primary schools — from balance bike days for Early Years and KS1 to cycle sport, competitions and whole-school days for KS2. Every session is designed to build confidence, skills and a lifelong love of cycling.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in West Yorkshire and bring our cycling days to primary schools right across the region.",
  },
  {
    q: "What ages and year groups do you work with?",
    a: "Everyone from Nursery and Reception through to KS1 and KS2. Every session is tailored to the age group and ability of the children taking part.",
  },
  {
    q: "Do you provide the bikes and equipment?",
    a: "Yes — we bring everything needed for the day, including bikes and helmets. Children simply turn up ready to ride, and no special clothing or footwear is required.",
  },
  {
    q: "Who runs the sessions?",
    a: "Pro Ride was founded by former Team GB and Olympic cyclist Phil Bateman. Our friendly, qualified coaches keep groups small so every child gets plenty of attention.",
  },
  {
    q: "How do we book a cycling day for our school?",
    a: "Head to our contact page to send a booking request with your preferred dates, or call us on 07960 534 012. We'll plan your sessions and send a suggested outline for your visit.",
  },
];

const balanceBikeFaqs = [
  {
    q: "How many children can take part in a day?",
    a: "Our usual day caters for up to 60 children in four one-hour sessions, however extra sessions can be added by reducing the duration of sessions. Our standard charges cater for up to 60, 75 or 90 children. Please see the current price list.",
  },
  {
    q: "What ages are catered for?",
    a: "We run balance bike sessions for all FS/KS1 classes from Nursery to Year Two. All equipment is provided for up to and including year one, whilst year 2 bring in their own bikes. We can provide larger balance bikes that convert to pedal bikes for year 2 if they are needed, but these are subject to availability and carry an additional hire charge.",
  },
  {
    q: "Some of our children can already ride a pedal bike, can they take part in the sessions?",
    a: "Yes, absolutely. Those who have recently learned to pedal still enjoy taking part in the sessions and always develop new skills and greater confidence that can then be applied to their riding once they return to their pedal bike.",
  },
  {
    q: "Do you provide the bikes or do the children need to bring their own?",
    a: "Yes, we provide everything needed for the sessions so children simply rock-up to their sessions and we take it from there. No special clothing or footwear is needed. In particularly cold weather we do however advise the children wear gloves if possible.",
  },
  {
    q: "Do you run sessions for children that can already ride a bike?",
    a: "Yes, our \"Beginner\" sessions are designed specifically for this purpose. We offer a one-day beginner program for up to 60 children aimed at helping them transition from balance bike to pedal bike. Intended for Years 1 and 2, the day is split into groups of 10 where the children are taught how to control, balance and pedal using special convertible bikes.",
  },
  {
    q: "How do I book a balance bike day for my school?",
    a: "You can check availability and reserve a date online by going to the contact page on this website and filling out a booking request form. Once your form is received, we will plan your sessions and send you a booking form with a suggested outline for your visit. You will then have two weeks to sign and return or amend your booking. No payment is taken prior to the visit, but late cancellations will incur a penalty, details of which are outlined in the terms attached to your booking confirmation.",
  },
  {
    q: "Can I change my date once I've booked?",
    a: "If you are unable to go ahead with your planned visit, we will try to arrange an alternative date providing we have at least 30 days notice. Last minute cancellations will usually incur penalty charges as it may not be possible to fill your booking.",
  },
];

function FaqSection({ title, faqs, startKey }) {
  return (
    <div className="faq-section">
      <h2 className="faq-section__title">{title}</h2>
      <Accordion>
        {faqs.map((item, i) => (
          <Accordion.Item eventKey={`${startKey + i}`} key={i}>
            <Accordion.Header>{item.q}</Accordion.Header>
            <Accordion.Body>{item.a}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...generalFaqs, ...balanceBikeFaqs].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <Container className="faq-page">
      {window.scrollTo(0, 0)}
      <Seo
        title="School Cycling Days — FAQs | Pro Ride Coaching"
        description="Answers to common questions from schools about Pro Ride cycling days — what we offer, areas covered, ages, equipment, who runs the sessions and how to book your school's day."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center">
        <h1 className="section-heading">Frequently asked questions</h1>
        <p className="section-sub">
          Everything schools usually want to know about booking a Pro Ride
          cycling day. Can't find your answer? We're happy to help.
        </p>
      </div>

      <FaqSection title="General questions" faqs={generalFaqs} startKey={0} />
      <FaqSection
        title="Balance bike day questions"
        faqs={balanceBikeFaqs}
        startKey={100}
      />

      <div className="faq-cta">
        <h3>Still have a question?</h3>
        <p>Drop us a message or give us a call — we'd love to hear from you.</p>
        <Link to="/contact" className="button">
          Get in touch
        </Link>
      </div>
    </Container>
  );
}

export default FAQ;
