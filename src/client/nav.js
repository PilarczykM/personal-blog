const NavLink = document.querySelectorAll("[data-navLink]");

NavLink.forEach((link) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
});
