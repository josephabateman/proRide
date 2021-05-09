import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import AboutProRide from "./About/AboutProRide";
import AboutPhil from "./About/AboutPhil";
import ContactForm from "./ContactForm";
import Services from "./Services/Services";
import NavBar from "./NavBar";
import servicesData from "../data/services";
import ContentTemplate from "./ContentTemplate";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function Footer() {
  const date = new Date();

  return (
    <div>
      <footer className="footer pt-5 pb-2">
        <div className="container">
          <span className="text-muted text-center">
            ©ProRide Coaching {date.getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}

// const mappedData = servicesData.map((service, key) => {
//   return [service, key];
// });

// const servicePageKey = sessionStorage.getItem("servicePageKey");
// console.log(servicePageKey);

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/contact">
          <ContactForm />
        </Route>
        <Route exact path="/aboutProRide">
          <AboutProRide />
        </Route>
        <Route exact path="/aboutPhil">
          <AboutPhil />
        </Route>
        {/* change the 1 beneath to a variable passed in from button click */}
        {/* <Route
          exact
          path={`/${mappedData[servicePageKey][0].name.replace(/\s/g, "")}`}
        >
          <ContentTemplate
            header={mappedData[servicePageKey][0].name}
            header2={mappedData[servicePageKey][0].header2}
            description={mappedData[servicePageKey][0].description}
            flyer={mappedData[servicePageKey][0].flyer}
            flyer2={mappedData[servicePageKey][0].flyer2}
          />
        </Route> */}
        {servicesData.map((service, key) => {
          return (
            <Route exact path={`/${service.name.replace(/\s/g, "")}`}>
              <ContentTemplate
                className="content-div"
                header={service.name}
                header2={service.header2}
                description={service.description}
                flyer={service.flyer}
                flyer2={service.flyer2}
              />
            </Route>
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
