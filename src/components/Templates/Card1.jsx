import React from "react";
// import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Card1(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };
  return (
    <div>
      <Link
        className="text-decoration-none"
        to={`/${props.title.replace(/[()\s+]/g, "")}`}
      >
        <img className={props.className} src={props.img} />
        <div>
          <h2 className="pt-3">{props.title}</h2>
          {/* <hr /> */}
          <p>{props.text}</p>

          <a href={props.buttonLink} className="button" style={button5}>
            Learn More
          </a>
        </div>
      </Link>
    </div>
  );
}

export default Card1;