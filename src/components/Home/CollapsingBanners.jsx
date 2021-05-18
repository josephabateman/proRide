import React from "react";
import { Link } from "react-router-dom";
import customStyling from "../../styles/custom-styling";

function CollapsingBanners(props) {

  return (
    <div className={props.cardContainerPreferences}>
      {props.title ? <h1 className={customStyling.collapsingBanners.title}>{props.title}</h1> : ""}
      <h5 className={customStyling.collapsingBanners.h5}>{props.description}</h5>
      {props.buttonText != undefined ? (
        <Link to={props.buttonLink} className={customStyling.collapsingBanners.buttonStyle}>
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
