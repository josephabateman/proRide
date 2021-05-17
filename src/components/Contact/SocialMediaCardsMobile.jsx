import React from "react";
import socialMediaData from "../../data/socialMediaData";
import customStyling from "../../styles/custom-styling";

function SocialMediaCardsMobile() {
  return (
    <>
      {socialMediaData.map((service, key) => (
        <div key={key} className={customStyling.socialMediaCardsMobileStyles.container}>
          <a href={service.link}>
            <i className={service.icon}></i>
            <p className={customStyling.socialMediaCardsMobileStyles.iconText}>{service.name}</p>
          </a>
        </div>
      ))}
    </>
  );
}

export default SocialMediaCardsMobile;
