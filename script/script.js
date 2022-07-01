//*funcao que faz o scroll suave
function initScroll() {
  //* pega o link interno clicado
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

  //*Laço que pega o click e executa a funcao de scroll
  itemMenu.forEach((element) => {
    element.addEventListener("click", scrollSection);
  });
}
initScroll();
