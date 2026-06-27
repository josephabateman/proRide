import React from "react";
import { Link } from "react-router-dom";

function ServiceCardSmall(props) {
  const to = `/${props.title.replace(/[()\s+]/g, "")}`;

  return (
    <Link className="service-tile" to={to}>
      <div className="service-tile__media">
        <img
          src={props.img}
          alt={`${props.title} — Pro Ride cycling sessions for schools`}
          loading="lazy"
        />
      </div>
      <div className="service-tile__body">
        <h3 className="service-tile__title">{props.title}</h3>
        <p className="service-tile__text">{props.text}</p>
        <span className="service-tile__cta">
          Learn more
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </Link>
  );
}

export default ServiceCardSmall;
