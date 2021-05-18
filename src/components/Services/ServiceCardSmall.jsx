import React from "react";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function ServiceCardSmall(props) {

  return (
    <div>
      <Link
        className={customStyling.serviceCardSmall.container}
        to={`/${props.title.replace(/[()\s+]/g, "")}`}
      >
        <img className={props.className} src={props.img} />
        <div>
          <h2 className={customStyling.serviceCardSmall.h2}>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </Link>
      <Link
        to={`/${props.title.replace(/[()\s+]/g, "")}`}
        className={customStyling.serviceCardSmall.button}
      >
        Learn More
      </Link>
    </div>
  );
}

export default ServiceCardSmall;
