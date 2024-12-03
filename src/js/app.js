const menuButton = document.querySelector(".navbar__toggle-btn");
const menuLinksContainer = document.querySelector(".navbar__links-list");
const links = document.querySelectorAll(".navbar__item");

menuButton.addEventListener("click", () => {
  menuLinksContainer.classList.toggle("navbar__links-list--active");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__item--active"));

    e.currentTarget.classList.add("navbar__item--active");
  });
});
