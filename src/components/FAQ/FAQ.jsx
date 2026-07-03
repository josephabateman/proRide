import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import content from "../../data/siteContent.json";

const generalFaqs = content.faq.general;
const balanceBikeFaqs = content.faq.balanceBike;

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
        <h1 className="section-heading">{content.faq.heading}</h1>
        <p className="section-sub">{content.faq.subtitle}</p>
      </div>

      <FaqSection title="General questions" faqs={generalFaqs} startKey={0} />
      <FaqSection
        title="Balance bike day questions"
        faqs={balanceBikeFaqs}
        startKey={100}
      />

      <div className="faq-cta">
        <h3>{content.faq.ctaHeading}</h3>
        <p>{content.faq.ctaText}</p>
        <Link to="/contact" className="button">
          {content.faq.ctaButton}
        </Link>
      </div>
    </Container>
  );
}

export default FAQ;
