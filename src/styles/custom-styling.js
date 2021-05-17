//Home Page
const cardFullWidth = {
  cardContainerPreferences: "blue-gradient text-white pt-2",
  title: "display-5",
  h5: "font-weight-light",
  buttonStyle: "button"
};

//about Pages (about Phil & about ProRide)
const aboutTemplateStyles = {
  container: "pl-2 text-left",
  h1: "py-3 display-5 text-center text-md-left",
  image1: "about-img float-md-left mr-md-5 d-block mx-auto m-3",
  image2: "about-img mb-5 float-md-right mx-md-4 d-block mx-auto",
  linkText: "text-info",
  img2AndText2Section: "mt-4 mb-4",
};

//Contact Page
const contactFormStyles = {
  emailInput: "mt-3 mb-3",
  buttonPosition: "d-flex justify-content-sm-start mt-3",
  buttonColor: "primary",
};

const contactPageStyles = {
  firstRow: "mt-3 mb-3 justify-content-md-center d-none d-lg-block",
  secondRow: "d-lg-none justify-content-center mt-3 mb-3",
};

const socialMediaCardsStyles = {
  cardStyleWidth: "18rem",
  cardStyleMinHeight: "200px",
  title: "mt-3",
};

const socialMediaCardsMobileStyles = {
  container: "d-inline-block p-sm-4 p-3",
  iconText: "d-none d-sm-block",
};

export default {
  cardFullWidth,
  aboutTemplateStyles,
  contactFormStyles,
  contactPageStyles,
  socialMediaCardsStyles,
  socialMediaCardsMobileStyles,
};
