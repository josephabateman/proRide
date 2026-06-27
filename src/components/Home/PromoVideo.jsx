import React from "react";

function PromoVideo(props) {
  return (
    <>
      <div className="ratio ratio-16x9 home-video">
        <iframe
          title="ProRide promo video"
          src={props.src}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default PromoVideo;
