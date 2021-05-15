import React from "react";
import { useParams } from "react-router";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./Home/Home";
import AboutProRide from "./About/AboutProRide";
import AboutPhil from "./About/AboutPhil";
import ContactForm from "./Contact/ContactForm";
import ServicesPage from "./Services/ServicesPage";
import NavBar from "./NavBar";
import servicesData from "../data/services";
import SpecificServiceSecond from "./Services/SpecificServiceSecond";

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
      <QueryParamsDemo />

        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/aboutProRide" component={AboutProRide} />
          <Route exact path="/aboutPhil" component={AboutPhil} />

          {servicesData.map((service, key) => {
            return (
              <Route
                key={key}
                exact
                path={`/${service.name.replace(/\s/g, "")}`}
              >
                <SpecificServiceSecond
                  key={key}
                  proRideImg={service.proRideImg}
                  proRideImg2={service.proRideImg2}
                  img={service.img}
                  className="content-div"
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

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/account?name=netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/account?name=zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/account?name=yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/account?name=modus-create">Modus Create</Link>
          </li>
        </ul>

        <Child name={query.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}

export default App;
