//Home Page
const collapsingBanners = {
  mainCard: "blue-gradient text-white pt-2",
  container: "px-0",
  title: "display-5",
  h5: "font-weight-light",
  buttonStyle: "button",
  rowContainerAfterMainBanner: "collapsing-rows",
  minHeight_rowContainerAfterMainBanner: "450px",
  row: "mt-2",
  column: "p-0",
};

const promoVideo = {
  container: "mt-2 mt-md-0",
  src: "https://www.youtube.com/embed/KPvxQjljIgo",
};

//Services
const serviceCardSmall = {
  container: "text-decoration-none",
  h2: "pt-3",
  button: "button",
};

const serviceCardsFullPageWidth = {
  container: "text-white pt-2",
  color: "green-gradient",
  title: "display-5",
  h5: "font-weight-light",
  column: "align-self-center",
  buttonStyle: "button",
  imgStyle: "my-2",
  imgHeight: 300,
};

const servicesCardsCollection = {
  subHeaderText: "display-5 mb-4",
  firstRow: {
    row: "justify-content-center",
    column: "my-3",
    containerStyle:
      "service-card-img green-gradient shadow bg-white rounded font-weight-light",
  },
  secondRow: {
    row: "justify-content-center",
    // containerStyle: "blue-gradient service-card-img-taller",
    containerStyle:
      "service-card-img blue-gradient shadow bg-white rounded font-weight-light",
  },
  thirdRow: {
    row: "justify-content-center",
    column: "px-0",
  },
  fourthRow: {
    row: "justify-content-center",
    column: "my-3",
    containerStyle:
      "service-card-img green-gradient shadow bg-white rounded font-weight-light",
  },
};

const servicesPage = {
  container: "mt-3",
  title: "display-5",
  h5Column: "m-auto",
  h5: "font-weight-light",
};

//Specific Services Pages
const specificServicePage = {
  tileImageStyle: "service-card-img green-gradient",
  container: "pl-2",
  title: "py-3 display-5",
  text1: "text-left",
  text2: "mt-5 text-left",
  flyer1Col: "mb-5",
  flyer1Style: "button mr-3",
  flyer2Style: "button",
};

//about Pages (about Phil & about ProRide)
const aboutTemplateStyles = {
  container: "pl-2 text-left",
  h1: "py-3 display-5 text-center text-md-left",
  linkText: "text-info",
  img2AndText2Section: "mt-4 mb-4",
};

//Contact Page
const contactFormStyles = {
  emailInput: "mt-3 mb-3",
  buttonPosition: "d-flex justify-content-sm-start mt-3",
  buttonStyle: "button",
};

const contactPageStyles = {
  firstRow: "mt-3 mb-3 justify-content-md-center d-none d-lg-block",
  secondRow: "d-lg-none justify-content-center my-3",
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



//don't touch these
export default {
  serviceCardsFullPageWidth,
  serviceCardSmall,
  servicesCardsCollection,
  servicesPage,
  specificServicePage,
  collapsingBanners,
  promoVideo,
  aboutTemplateStyles,
  contactFormStyles,
  contactPageStyles,
  socialMediaCardsStyles,
  socialMediaCardsMobileStyles,
};
