import React from "react";

function HomePageBanners(props) {
  const button5 = {
    backgroundColor: "#4e9af1",
  };

  return (
    <div className={`${props.color} full-screen-info`}>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      {props.buttonText != undefined ? (
        <a href={props.buttonLink} className="button" style={button5}>
          {props.buttonText}
        </a>
      ) : (
        ""
      )}
      <img alt={props.imageDescription} src={props.imageSrc} />
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
