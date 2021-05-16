import React from "react";
import socialMediaData from "../../data/socialMediaData";

function SocialMediaCardsMobile() {
  return (
    <>
      {socialMediaData.map((service, key) => (
        <div key={key} className='d-inline-block p-sm-4 p-3'>
          <a href={service.link}>
            <i className={service.icon}></i>
            <p className="d-none d-sm-block">{service.name}</p>
          </a>
        </div>
      ))}
    </>
  );
}

export default SocialMediaCardsMobile;
