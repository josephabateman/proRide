import React from "react";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function CollapsingBanners(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div className={props.cardContainerPreferences}>
      {props.title ? <h1 className={customStyling.cardFullWidth.title}>{props.title}</h1> : ""}
      <h5 className={customStyling.cardFullWidth.h5}>{props.description}</h5>
      {props.buttonText != undefined ? (
        <Link to={props.buttonLink} className={customStyling.cardFullWidth.buttonStyle} style={button5}>
          {props.buttonText}
        </Link>
      ) : (
        ""
      )}
      {props.imageSrc ? (
        <img alt={props.imageDescription} src={props.imageSrc} />
      ) : (
        ""
      )}
      {props.videoSrc != undefined ? (
        <div>
          <iframe
            src={props.videoSrc}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CollapsingBanners;
