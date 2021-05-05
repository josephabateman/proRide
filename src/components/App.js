import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import AboutPhil from "./About/AboutPhil";
import ContactForm from "./ContactForm";
import Services from "./Services/Services";
import NavBar from "./NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function Footer() {
  const date = new Date();

  return (
    <div>
      <footer className="footer pt-5 pb-2 sticky-bottom">
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
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/aboutPhil">
          <AboutPhil />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
