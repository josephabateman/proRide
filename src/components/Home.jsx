import React, { useState } from 'react';
import servicesData from '../data/services'

//figure out how to toggle back to video with button click
function ShowServices() {
   const [video, revealServices] = useState(
     <div>
      <p>Pro Ride is a Yorkshire-based company offering a range of programs aimed at helping primary schools develop cycling at all levels. Our programs have been developed over years of working closely with schools throughout Yorkshire and the North to enable children to experience the positive benefits of cycling physically, mentally, and emotionally, leading to greater interest, confidence, and wellbeing.  All our programs are run by passionate, qualified instructors who ensure every session remains a fun, fast-paced, and engaging learning experience.​</p>
      <iframe className="d-block mx-auto" width="560" height="315" src="https://www.youtube.com/embed/KPvxQjljIgo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     </div>)

   return (
     <div>
      <button id="serviceButton" type="button" className="btn-lg btn-primary d-block mx-auto" onClick={() => revealServices(<div><CollapsingServices /> {serviceButton.remove()}</div>)}>
      Explore Our Services
      </button>
      {video}
    </div>
  );
}

// const removeSpaces = (str) => {
//   return str.replace(/[()\s+]/g,'')
// }


function CollapsingServices() {
 return (   

<div className="panel-group p-3" id="accordion" role="tablist" aria-multiselectable="false">

  {servicesData.map((service, key) => (
    <div className="border-bottom p-1" key={key}>

    <div className="panel panel-default" id={`heading${key}`}>
      <h5 className="mb-4 panel-title">
        <a id={service.name} className="service-name btn btn-link collapsed d-block" data-parent="#accordion" href={`#collapse${key}`} data-toggle="collapse" data-target={`#collapse${key}`} aria-expanded="false" aria-controls={`collapse${key}`}>
        <span id={`scroll-to-${service.name}`} className="d-block service-icons"><i className={service.fontAwesomeIcon}></i></span>
          {service.name}
        </a>
      </h5>
    </div>

    <div id={`collapse${key}`} className="collapse" aria-labelledby={`heading${key}`} data-parent="#accordion">
      <div className="card-body">
        <a href={service.flyer}  target="_blank">
            <button type="button" className="btn btn-outline-info">More info (printable pdf)</button>
          </a>
          {service.flyer2 ? <a href={service.flyer2}  target="_blank">
            <button type="button" className="btn btn-outline-info">Extra info (printable pdf)</button>
          </a> : ''}
        <h3>{service.header}</h3>
        {service.description}
        {/* <img className="service-images w-100 rounded mx-auto d-block" src={service.img} /> */}
      </div>
    </div>

  </div>
  ))}
  
</div>

 )
}

function Home() {
  return (
    <div>
      <h1>We develop cycling in schools through a range of tailored programs</h1>
      <ShowServices />
    </div>
  );
}

export default Home;