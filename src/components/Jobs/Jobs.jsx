import React, { useState } from "react";
import { Container, Form, Row, Col, FloatingLabel, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Seo from "../Seo";
import content from "../../data/siteContent.json";
import { phoneParts } from "../../data/renderContent";

// Same EmailJS service/template as the contact form, so applications land in
// the same inbox. The coach details are laid out in the message body.
const SERVICE_ID = "proridecoaching";
const TEMPLATE_ID = "proridetemplate";
const PUBLIC_KEY = "user_rhsl2oZqwgrD38edYovoz";

const phone = phoneParts(content.contact.phone);

const CERTIFICATES = [
  { key: "dbs", label: "DBS" },
  { key: "first_aid", label: "First Aid" },
  { key: "coaching", label: "Coaching certificate" },
  { key: "insurance", label: "Proof of insurance" },
];

function field(form, name) {
  const el = form.elements[name];
  return el ? String(el.value || "").trim() : "";
}

function buildMessage(form) {
  const v = (n) => field(form, n) || "-";
  const lines = [
    "COACH APPLICATION (sent from the Jobs page)",
    "",
    "CONTACT DETAILS",
    `Full name: ${v("full_name")}`,
    `Email: ${v("email")}`,
    `Mobile: ${v("mobile")}`,
    `Other phone: ${v("phone")}`,
    `Address: ${v("address")}`,
    `Postcode: ${v("postcode")}`,
    `Date of birth: ${v("dob")}`,
    "",
    "QUALIFICATIONS",
    v("qualifications"),
    "",
    "COACHING EXPERIENCE",
    v("experience"),
    "",
    "COACHING CERTIFICATES",
    ...CERTIFICATES.map(
      (c) =>
        `${c.label}: issued by ${v(`${c.key}_issuer`)}, expires ${v(`${c.key}_expiry`)}`
    ),
    "",
    `Registered on the DBS Update Service and up to date: ${v("dbs_update")}`,
    `British Cycling member: ${v("bc_member")}  Membership no: ${v("bc_number")}`,
    "",
    "ANYTHING ELSE",
    v("notes"),
  ];
  return lines.join("\n");
}

function Jobs() {
  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  function send(e) {
    e.preventDefault();
    const form = e.target;

    // Spam trap filled in: pretend it worked but don't send anything.
    if (field(form, "company_website")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    const params = {
      name: field(form, "full_name"),
      email: field(form, "email"),
      school: "Coach application",
      postcode: field(form, "postcode"),
      date: "",
      total_number_of_children_taking_part: "",
      num_in_each_class: "",
      message: buildMessage(form),
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY }).then(
      () => {
        setStatus("sent");
        window.scrollTo(0, 0);
      },
      (error) => {
        console.error("Coach application failed to send", error);
        setStatus("error");
      }
    );
  }

  return (
    <>
      <Seo
        title="Cycling Coach Jobs | Join Pro Ride Coaching"
        description="We're always looking for enthusiastic cycling coaches to deliver fun cycling days in primary schools. Send us your details using our online coach information form."
      />
      <Container className="jobs-page">
        <div className="text-center">
          <h1 className="section-heading">{content.jobs.heading}</h1>
          <p className="section-sub">{content.jobs.text}</p>
        </div>

        <div className="contact-card jobs-card">
          {status === "sent" ? (
            <div className="jobs-sent text-center">
              <i className="fas fa-check-circle"></i>
              <h2>Thank you, your details have been sent</h2>
              <p>
                We'll be in touch soon. If you have copies of your DBS, first aid or
                coaching certificates, please email them to{" "}
                <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>.
              </p>
            </div>
          ) : (
            <Form onSubmit={send} className="contact-form text-start">
              {status === "error" ? (
                <Alert variant="danger" className="contact-form__error">
                  <strong>Sorry, your details didn't send.</strong> Please try again,
                  or contact us on <a href={`tel:${phone.intl}`}>{phone.display}</a> or{" "}
                  <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>.
                </Alert>
              ) : null}

              <h2 className="jobs-form__section">Contact details</h2>
              <Row className="g-3">
                <Col md={6}>
                  <FloatingLabel controlId="job-name" label="Full name *">
                    <Form.Control name="full_name" placeholder="Full name" autoComplete="name" required />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="job-email" label="Email *">
                    <Form.Control name="email" type="email" placeholder="Email" autoComplete="email" required />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="job-mobile" label="Mobile *">
                    <Form.Control name="mobile" type="tel" placeholder="Mobile" autoComplete="tel" required />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="job-phone" label="Other phone">
                    <Form.Control name="phone" type="tel" placeholder="Other phone" />
                  </FloatingLabel>
                </Col>
                <Col xs={12}>
                  <FloatingLabel controlId="job-address" label="Address">
                    <Form.Control name="address" placeholder="Address" autoComplete="street-address" />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="job-postcode" label="Postcode *">
                    <Form.Control name="postcode" placeholder="Postcode" autoComplete="postal-code" required />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="job-dob" label="Date of birth">
                    <Form.Control name="dob" type="date" placeholder="Date of birth" />
                  </FloatingLabel>
                </Col>
              </Row>

              <h2 className="jobs-form__section">Qualifications</h2>
              <FloatingLabel
                controlId="job-quals"
                label="Degree, certificates, professional and coaching qualifications"
              >
                <Form.Control
                  name="qualifications"
                  as="textarea"
                  placeholder="Qualifications"
                  style={{ height: "120px" }}
                />
              </FloatingLabel>
              <Form.Text>For each one: the name, the date you got it and who it was from.</Form.Text>

              <h2 className="jobs-form__section">Coaching experience</h2>
              <FloatingLabel controlId="job-exp" label="Relevant experience, most recent first">
                <Form.Control
                  name="experience"
                  as="textarea"
                  placeholder="Coaching experience"
                  style={{ height: "140px" }}
                />
              </FloatingLabel>
              <Form.Text>For example: school or club, dates, age group and what you did.</Form.Text>

              <h2 className="jobs-form__section">Coaching certificates</h2>
              <p className="jobs-form__hint">
                Leave blank anything you don't have yet. You can email copies to us after
                sending this form.
              </p>
              {CERTIFICATES.map((c) => (
                <Row className="g-3 mb-1" key={c.key}>
                  <Col xs={12} md={4} className="jobs-form__cert">
                    {c.label}
                  </Col>
                  <Col xs={6} md={4}>
                    <FloatingLabel controlId={`job-${c.key}-issuer`} label="Issued by">
                      <Form.Control name={`${c.key}_issuer`} placeholder="Issued by" />
                    </FloatingLabel>
                  </Col>
                  <Col xs={6} md={4}>
                    <FloatingLabel controlId={`job-${c.key}-expiry`} label="Expiry date">
                      <Form.Control name={`${c.key}_expiry`} type="date" placeholder="Expiry date" />
                    </FloatingLabel>
                  </Col>
                </Row>
              ))}

              <Row className="g-3 mt-2">
                <Col md={6}>
                  <FloatingLabel controlId="job-dbs-update" label="Registered on the DBS Update Service?">
                    <Form.Select name="dbs_update" defaultValue="">
                      <option value="">Please choose</option>
                      <option>Yes</option>
                      <option>No</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md={3} xs={6}>
                  <FloatingLabel controlId="job-bc" label="British Cycling member?">
                    <Form.Select name="bc_member" defaultValue="">
                      <option value="">Choose</option>
                      <option>Yes</option>
                      <option>No</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md={3} xs={6}>
                  <FloatingLabel controlId="job-bc-no" label="Membership no.">
                    <Form.Control name="bc_number" placeholder="Membership no." />
                  </FloatingLabel>
                </Col>
                <Col xs={12}>
                  <FloatingLabel controlId="job-notes" label="Anything else you'd like to tell us">
                    <Form.Control
                      name="notes"
                      as="textarea"
                      placeholder="Anything else"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12}>
                  <Form.Check
                    id="job-consent"
                    name="consent"
                    required
                    label="I confirm these details are correct and I'm happy for Pro Ride Coaching to keep them to consider my application."
                  />
                </Col>
                <Col xs={12}>
                  <button className="button w-100" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : content.jobs.button}
                  </button>
                </Col>
              </Row>

              {/* Spam trap: hidden from people and screen readers, so only bots fill it in. */}
              <div className="contact-form__hp" aria-hidden="true">
                <label htmlFor="job-company-website">Leave this field empty</label>
                <input
                  id="job-company-website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </Form>
          )}
        </div>
      </Container>
    </>
  );
}

export default Jobs;
