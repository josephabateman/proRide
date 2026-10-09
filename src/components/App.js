import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// Pages are imported eagerly (not React.lazy) so each pre-rendered page can
// hydrate straight away instead of flashing a "Loading..." fallback.
import Home from "./Home/Home";
import AboutProRide from "./About/AboutProRide";
import AboutPhil from "./About/AboutPhil";
import ContactPage from "./Contact/ContactPage";
import ServicesPage from "./Services/ServicesPage";
import SpecificService from "./Services/SpecificService";
import Jobs from "./Jobs/Jobs";
import FAQ from "./FAQ/FAQ";
import NotFound from "./NotFound";
import NavBar from "./NavBar";
import XLogo from "./XLogo";
import servicesData from "../data/services";
import content from "../data/siteContent.json";
import { phoneParts } from "../data/renderContent";
import "bootstrap/dist/css/bootstrap.min.css";
// Unminified on purpose: CRA 4's CSS parser chokes on the minified file's
// "calc(...*-1)". The production build minifies it anyway.
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/App.css";

const phone = phoneParts(content.contact.phone);

// Cookie-free Cloudflare Web Analytics. Paste the site token into
// Settings in /admin to switch it on; it stays off while the token is blank.
function useCloudflareAnalytics(token) {
  useEffect(() => {
    if (!token || document.querySelector("script[data-cf-beacon]")) return;
    const s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token, spa: true }));
    document.body.appendChild(s);
  }, [token]);
}

function Footer() {
  const date = new Date();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row text-start gy-4">
          <div className="col-lg-5 col-md-12">
            <h4 className="site-footer__brand">
              Pro <span>Ride</span> Coaching
            </h4>
            <p className="site-footer__blurb">{content.footer.blurb}</p>
            <div className="site-footer__social">
              <a
                href={content.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={content.contact.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
              >
                <XLogo size={15} />
              </a>
              <a href={`mailto:${content.contact.email}`} aria-label="Email">
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <h5 className="site-footer__heading">Explore</h5>
            <ul className="site-footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-sm-6">
            <h5 className="site-footer__heading">Get in touch</h5>
            <ul className="site-footer__links">
              <li>
                <a href={`tel:${phone.intl}`}>
                  <i className="fas fa-phone me-2"></i>{phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${content.contact.email}`}>
                  <i className="far fa-envelope me-2"></i>{content.contact.email}
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fas fa-paper-plane me-2"></i>Send us a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          © Pro Ride Coaching {date.getFullYear()} · {content.footer.bottomLine}
        </div>
      </div>
    </footer>
  );
}

function App() {
  useCloudflareAnalytics(content.settings && content.settings.cloudflareAnalyticsToken);

  return (
    <Router>
      <div className="main-container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ServicesPage} />
          {servicesData.map((service) => (
            <Route key={service.path} exact path={service.path}>
              <SpecificService
                img={service.img}
                tile={service.tile}
                title={service.name}
                header={service.header}
                dropdown1={service.dropdown1}
                dropdown2={service.dropdown2}
                text1={service.text1}
                text2={service.text2}
                flyer={service.flyer}
                flyer2={service.flyer2}
              />
            </Route>
          ))}
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/about" component={AboutProRide} />
          <Route exact path="/about/phil-bateman" component={AboutPhil} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
