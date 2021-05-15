import React from "react";
import { Link } from "react-router-dom";

function HomePageBanners(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div className={`${props.color} full-screen-info`}>
      {props.title ? <h1 className="display-4">{props.title}</h1> : ""}
      <h3 className="font-weight-light">{props.description}</h3>
      {props.buttonText != undefined ? (
        <Link to={props.buttonLink} className="button" style={button5}>
          {props.buttonText}
        </Link>
      ) : (
        ""
      )}
      {props.imageSrc ? (
        <img
          className="content-template-img"
          alt={props.imageDescription}
          src={props.imageSrc}
        />
      ) : (
        ""
      )}
      {props.videoSrc != undefined ? (
        <div className="video-container">
          <iframe
            className="video"
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

export default HomePageBanners;
