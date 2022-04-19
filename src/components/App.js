import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home/Home";
// import AboutProRide from "./About/AboutProRide";
// import AboutPhil from "./About/AboutPhil";
// import ContactPage from "./Contact/ContactPage";
// import ServicesPage from "./Services/ServicesPage";
import NavBar from "./NavBar";
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
    <div className="mt-auto">
      <footer className="footer pt-5 pb-2 bg-light">
        <div className="container">
          <span className="text-muted text-center">
            © ProRide Coaching {date.getFullYear()}
          </span>
        </div>
      </footer>
    </div>
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
