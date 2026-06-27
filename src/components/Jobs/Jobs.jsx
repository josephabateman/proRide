import React from "react";
import Seo from "../Seo";

function Jobs() {
  return (
    <>
      <Seo
        title="Cycling Coach Jobs | Join Pro Ride Coaching"
        description="We're always looking for enthusiastic cycling coaches to deliver fun cycling days in West Yorkshire schools. Download our coach information form and get in touch."
      />
      <h1 className="my-4">Join the team</h1>
      <hr />
      <p className="container-lg" style={{ maxWidth: 640 }}>
        We're always on the lookout for enthusiastic cycling coaches and would
        love to hear from you. Download the form below, fill it out and return it
        to{" "}
        <a className="text-info" href="mailto:admin@proridecoaching.co.uk">
          admin@proridecoaching.co.uk
        </a>{" "}
        to be considered. Thank you!
      </p>
      <a
        href="https://drive.google.com/file/d/11m__zq1KzyEhHghmSfziwXDMXTsi-kLw/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{ verticalAlign: "-2px" }}
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        &nbsp; Download Coach Information Form
      </a>
    </>
  );
}

export default Jobs;
