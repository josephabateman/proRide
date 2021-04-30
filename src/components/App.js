import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import AboutPhil from './AboutPhil'

import '../styles/App.css'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand logo" href="/"><span id="logo-a">ProRide </span><i className="fa fa-bicycle" aria-hidden="true"></i><span id="logo-b" className="d-block logo-b">Cycling For Schools</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">About</a>
            <a className="nav-item nav-link" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

const date = new Date()

function Footer() {
  return (
    <div>
      <footer className="footer pt-5 pb-2 sticky-bottom">
        <div className="container">
          <span className="text-muted text-center">©ProRide Coaching {date.getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
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
