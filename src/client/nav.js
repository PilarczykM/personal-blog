// eslint-disable-next-line no-undef
const NavLink = document.querySelectorAll("[data-navLink]");

NavLink.forEach((link) => {
  // eslint-disable-next-line no-undef
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
});
