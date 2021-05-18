import React from "react";

function PromoVideo(props) {
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={props.src}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default PromoVideo;
