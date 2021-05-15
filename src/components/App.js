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

function User() {
  let { id } = useParams();
  return <h2>User {id}</h2>;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function QueryScreen() {
  let query = useQuery();
  return (
    <div>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/account?name=foo">Foo User</Link>
          </li>
          <li>
            <Link to="/account?name=bar">Bar User</Link>
          </li>
          <li>
            <Link to="/account?name=baz">Baz User</Link>
          </li>
        </ul>
        <User name={query.get("name")} />
      </div>
    </div>
  );
}

function App() {
  //   <Link to="/aboutProRide">
  //   <AboutProRide />
  // </Link>
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/aboutProRide" component={AboutProRide} />
          <Route exact path="/aboutPhil" component={AboutPhil} />

          <Route path="/:id" children={<User />} />

          <QueryScreen />

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

export default App;
