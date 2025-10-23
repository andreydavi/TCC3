const carrossel = document.getElementById("carrossel");
const btnEsquerda = document.getElementById("btn-esquerda");
const btnDireita = document.getElementById("btn-direita");

btnDireita.addEventListener("click", () => {
  carrossel.scrollBy({ left: 400, behavior: "smooth" });
});

btnEsquerda.addEventListener("click", () => {
  carrossel.scrollBy({ left: -400, behavior: "smooth" });
});

  let scrollAmount = 0;
  let paused = false;

  function autoScroll() {
    if (!paused) {
      scrollAmount += 1;
      if (scrollAmount >= carrossel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carrossel.scrollTo({ left: scrollAmount });
    }
  }

  let interval = setInterval(autoScroll, 30);

  carrossel.addEventListener("mouseenter", () => paused = true);
  carrossel.addEventListener("mouseleave", () => paused = false);

  btnDireita.addEventListener("click", () => {
    carrossel.scrollBy({ left: 360, behavior: "smooth" });
  });

  btnEsquerda.addEventListener("click", () => {
    carrossel.scrollBy({ left: -360, behavior: "smooth" });
  });