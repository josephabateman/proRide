// Contact details come from siteContent.json (edit via SITE-CONTENT.md).
import content from "./siteContent.json";
import { phoneParts } from "./renderContent";

const phone = phoneParts(content.contact.phone);

const socialMediaData = [
  {
    name: "Email",
    text: "Want to book? Get in touch",
    link: `mailto:${content.contact.email}`,
    icon: "far fa-lg fa-envelope",
  },
  {
    name: "Facebook",
    text: "Connect with us on Facebook",
    link: content.contact.facebook,
    icon: "fab fa-lg fa-facebook-f",
  },
  {
    name: "X",
    text: "Post your Pro Ride pictures on X",
    link: content.contact.x,
    icon: "fab fa-lg fa-x-twitter",
  },
  {
    name: "Phone",
    text: `Prefer to speak to us? Feel free to call on ${phone.display}`,
    link: `tel:${phone.digits}`,
    icon: "fa fa-phone",
  },
];

export default socialMediaData;
