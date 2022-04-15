import React from "react";

function Jobs() {
  return (
    <>
      <h1 className="my-4">Job vacancies</h1>
      <hr></hr>
      <p className="container-lg">We are on the lookout for enthusiastic coaches and would love to hear from you. Please fill out the form below and return to <a className="text-info" href="mailto:admin@proridecoaching.com">admin@proridecoaching.com</a> to be considered. Thank you.</p>
      <a
        href="https://drive.google.com/file/d/11m__zq1KzyEhHghmSfziwXDMXTsi-kLw/view?usp=sharing"
        target="_blank"
        class="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        &nbsp; Coach Information Form
      </a>

    </>
  );
}

export default Jobs;
