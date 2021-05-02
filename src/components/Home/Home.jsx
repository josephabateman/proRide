import React, { useState, useRef, useEffect } from 'react';
import servicesData from '../../data/services'
import Video from '../Video'
import { Accordion, Card } from 'react-bootstrap';
import { ServicesHeader, ServicesCard } from '../ServicesCard'
import Welcome from './WelcomeComponent'
import RangeOfServices from './RangeOfServices'
import WatchOurVideo from './WatchOurVideo'
import BookSession from './BookSession'


function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return (
  <div>
    <h1>Now: {count}, before: {prevCount}</h1>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  </div>
  );
}

//figure out how to toggle back to video with button click
function ShowServices() {
   const [video, showServices] = useState(<Video />)

   return (
     <div>
      <button id="serviceButton" type="button" className="btn-lg btn-primary d-block mx-auto" 
        onClick={() => showServices(
          <div>
            <Services />
            {serviceButton.remove()} 
          </div>)}>
           Explore Our Services
      </button>
      {video}
    </div>
  );
}

// const removeSpaces = (str) => {
//   return str.replace(/[()\s+]/g,'')
// }

function Services() {

  return (
      
   <div>
      <Accordion>

        {servicesData.map((service, key) => (
          
          <Card key={key}>
          <Accordion.Toggle as={Card.Header} eventKey={`card-${key}`}>
            <ServicesHeader fontAwesomeIcon={service.fontAwesomeIcon} name={service.name}/>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`card-${key}`}>
            <Card.Body>
              <ServicesCard flyer={service.flyer} flyer2={service.flyer2} header={service.header} description={service.description} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        ))}

      </Accordion>
    </div>    
    
  ) 
}

function Home() {
  return (
    <div>
      <Welcome />
      <RangeOfServices />

      <div class='home-divider'>
        <div class='row'>
          <div class='column'>
            <div class='video-div'>
             <WatchOurVideo />
            </div>
          </div>
          <div class='column'>
            <div class='book-session-div'>
             <BookSession />
            </div>
          </div>
        </div>
      </div>

      
      
      {/* <ShowServices /> */}
    </div>
  );
}

export default Home;