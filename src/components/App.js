import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import AboutProRide from "./About/AboutProRide";
import AboutPhil from "./About/AboutPhil";
import ContactPage from "./Contact/ContactPage";
import ServicesPage from "./Services/ServicesPage";
import NavBar from "./NavBar";
import servicesData from "../data/services";
import SpecificService from "./Services/SpecificService";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function Footer() {
  const date = new Date();

  return (
    <div>
      <footer className="footer pt-5 pb-2 bg-light">
        <div className="container">
          <span className="text-muted text-center">
            ©ProRide Coaching {date.getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/aboutProRide" component={AboutProRide} />
          <Route exact path="/aboutPhil" component={AboutPhil} />

          {servicesData.map((service, key) => {
            return (
              <Route
                key={key}
                exact
                path={`/${service.name.replace(/\s/g, "")}`}
              >
                <SpecificService
                  key={key}
                  img={service.img}
                  img2={service.img2}
                  img={service.svg}
                  header={service.name}
                  header2={service.header2}
                  text1={service.text1}
                  text2={service.text2}
                  flyer={service.flyer}
                  flyer2={service.flyer2}
                />
              </Route>
            );
          })}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
