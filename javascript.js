document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const velocidade = 1.5;

  if (!slider) return;

  // Duplica os elementos para criar o efeito de loop
  slider.innerHTML += slider.innerHTML;

  let posicao = 0;
  const larguraCiclo = slider.scrollWidth / 2;

  function animar() {
    posicao -= velocidade;

    if (Math.abs(posicao) >= larguraCiclo) {
      posicao = 0;
    }

    slider.style.transform = `translateX(${posicao}px)`;
    requestAnimationFrame(animar);
  }

  animar();
});

let cont = 0;
function grug() {
  cont++;
  if (cont >= 10) {
    cont = 0;
    const container = document.getElementById("grug-container");
    if (!container) return;

    const grugAntigo = document.getElementById("grug");
    if (grugAntigo) grugAntigo.remove();

    const grug = document.createElement("img");
    grug.src = "imagems/grug.jpeg";
    grug.id = "grug";
    grug.style.position = "absolute";
    grug.style.left = "0";
    grug.style.top = "30%";
    // Detecta tamanho da tela
    if (window.innerWidth <= 768) {
      grug.style.width = "15vh"; // mobile
    } else {
    grug.style.width = "calc(150 / 1920 * 100vw)"; // desktop
    }
    grug.style.transition = "transform 0.05s linear";
    container.appendChild(grug);

    let x = 0;
    const amplitude = 60;
    const frequencia = 50;
    const speed = 10;
    const larguraTela = container.offsetWidth;

    const mover = setInterval(() => {
      x += speed;
      const y = -Math.abs(Math.sin(x / frequencia)) * amplitude + 100;

      grug.style.transform = `translate(${x}px, ${y}px)`;

      if (x > larguraTela) {
        clearInterval(mover);
        grug.remove();
      }
    }, 16);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
      } else {
        entry.target.classList.remove("ativo");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".area, .area2, .area3, .area4, .area5").forEach((el) =>
  observer.observe(el)
);

function prodrol() {
  const section = document.getElementById("produtos");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function prodrol2() {
  const section = document.getElementById("sobre");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function prodrol3() {
  const section = document.getElementById("contatos");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}
