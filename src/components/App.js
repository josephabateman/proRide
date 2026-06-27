import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home/Home";
// import AboutProRide from "./About/AboutProRide";
// import AboutPhil from "./About/AboutPhil";
// import ContactPage from "./Contact/ContactPage";
// import ServicesPage from "./Services/ServicesPage";
import NavBar from "./NavBar";
import XLogo from "./XLogo";
import servicesData from "../data/services";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

// import SpecificService from "./Services/SpecificService";

const Home = React.lazy(() => import("./Home/Home"));
const AboutProRide = React.lazy(() => import("./About/AboutProRide"));
const AboutPhil = React.lazy(() => import("./About/AboutPhil"));
const ContactPage = React.lazy(() => import("./Contact/ContactPage"));
const ServicesPage = React.lazy(() => import("./Services/ServicesPage"));
// const NavBar = React.lazy(() => import("./NavBar"));
const SpecificService = React.lazy(() => import("./Services/SpecificService"));
const Jobs = React.lazy(() => import("./Jobs/Jobs"));
const FAQ = React.lazy(() => import("./FAQ/FAQ"));


function Footer() {
  const date = new Date();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row text-start gy-4">
          <div className="col-lg-5 col-md-12">
            <h4 className="site-footer__brand">
              Pro<span>Ride</span> Coaching
            </h4>
            <p className="site-footer__blurb">
              Professional cycling coaching and fun biking days for schools
              across West Yorkshire — from balance bikes to KS2 cycle sport.
            </p>
            <div className="site-footer__social">
              <a
                href="https://www.facebook.com/proridecoaching"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/proridecoaching"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
              >
                <XLogo size={15} />
              </a>
              <a href="mailto:admin@proridecoaching.co.uk" aria-label="Email">
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <h5 className="site-footer__heading">Explore</h5>
            <ul className="site-footer__links">
              <li><a href="#/">Home</a></li>
              <li><a href="#/services">Services</a></li>
              <li><a href="#/faq">FAQ</a></li>
              <li><a href="#/aboutProRide">About</a></li>
              <li><a href="#/jobs">Jobs</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-6">
            <h5 className="site-footer__heading">Get in touch</h5>
            <ul className="site-footer__links">
              <li>
                <a href="tel:+447960534012">
                  <i className="fas fa-phone me-2"></i>07960 534 012
                </a>
              </li>
              <li>
                <a href="mailto:admin@proridecoaching.co.uk">
                  <i className="far fa-envelope me-2"></i>admin@proridecoaching.co.uk
                </a>
              </li>
              <li>
                <a href="#/contact">
                  <i className="fas fa-paper-plane me-2"></i>Send us a message
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          © ProRide Coaching {date.getFullYear()} · Cycling for Schools
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <div className="main-container">
        <Router>
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={ServicesPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/aboutProRide" component={AboutProRide} />
              <Route exact path="/aboutPhil" component={AboutPhil} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/faq" component={FAQ} />

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
                      // img2={service.img2}
                      tile={service.tile}
                      title={service.name}
                      header={service.header}
                      // title2={service.header2}
                      dropdown1={service.dropdown1}
                      dropdown2={service.dropdown2}
                      dropdown3={service.dropdown3}
                      dropdown4={service.dropdown4}
                      text1={service.text1}
                      text2={service.text2}
                      // text3={service.text3}
                      // text4={service.text4}
                      flyer={service.flyer}
                      flyer2={service.flyer2}
                    />
                  </Route>
                );
              })}
            </Switch>
          </Suspense>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
