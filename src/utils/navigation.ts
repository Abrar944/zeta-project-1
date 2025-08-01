// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/blog" },
  { name: "Solutions", url: "/solutions" },
  { name: "Services", url: "/services" },
  { name: "Industries", url: "/contact" },
  { name: "Case-studies", url: "/contact" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Tools & Equipment", url: "/solutions" },
      { name: "Deployment Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};