import React from "react";

// Plays either a self-hosted video file (e.g. "/media/promo.mp4") or an
// embedded URL (e.g. a YouTube embed link). Picks the right element per src.
function PromoVideo(props) {
  const src = props.src || "";
  const isFile = /\.(mp4|webm|ogg)(\?.*)?$/i.test(src) || src.startsWith("/media/");
  const resolved = src.startsWith("/") ? (process.env.PUBLIC_URL || "") + src : src;

  return (
    <div className="ratio ratio-16x9 home-video">
      {isFile ? (
        <video
          src={resolved}
          poster={resolved.replace(/\.[a-z0-9]+(\?.*)?$/i, "-poster.jpg")}
          controls
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe title="ProRide promo video" src={src} allowFullScreen></iframe>
      )}
    </div>
  );
}

export default PromoVideo;
