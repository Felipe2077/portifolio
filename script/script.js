function initScroll() {
  const itemMenu = document.querySelectorAll(".js-menu a[href^='#']");
  function scrollSection(element) {
    element.preventDefault();
    const href = element.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  itemMenu.forEach((element) => {
    element.addEventListener("click", scrollSection);
  });
}
initScroll();
