function prodrol() {
    console.log("Função prodrol() foi chamada");
    const section = document.getElementById("produtos");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log("Elemento com ID 'produtos' não encontrado");
    }
}
function prodrol2() {
    console.log("Função prodrol() foi chamada");
    const section = document.getElementById("sobre");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log("Elemento com ID 'produtos' não encontrado");
    }
}
function prodrol3() {
    console.log("Função prodrol() foi chamada");
    const section = document.getElementById("contatos");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log("Elemento com ID 'produtos' não encontrado");
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const velocidade = 1.5;

  // Duplica os elementos para criar o efeito de loop
  slider.innerHTML += slider.innerHTML;

  let posicao = 0;

  // Calcula a largura real de um "ciclo completo" do slider (metade, pois duplicou)
  const larguraCiclo = slider.scrollWidth / 2;

  function animar() {
    posicao -= velocidade;

    // Quando atingir o fim do primeiro ciclo, reseta a posição
    if (Math.abs(posicao) >= larguraCiclo) {
      posicao = 0;
    }

    slider.style.transform = `translateX(${posicao}px)`;
    requestAnimationFrame(animar);
  }

  animar();
});
 let cont = 0 
function grug() {
  cont ++
 if (cont >= 10) {

   cont = 0 
  const container = document.getElementById("grug-container");

  // Remove Grug antigo se existir
  const grugAntigo = document.getElementById("grug");
  if (grugAntigo) {
    grugAntigo.remove();
  }

  // Cria novo Grug
  const grug = document.createElement("img");
  grug.src = "imagems/grug.jpeg"; // coloque o caminho correto da imagem
  grug.id = "grug";
  grug.style.position = "absolute";
  grug.style.left = "0";
  grug.style.top = "0";
  grug.style.width = "150px";
  grug.style.transition = "transform 0.05s linear";
  container.appendChild(grug);

  // Inicia movimento
  let x = 0;
  const amplitude = 60;
  const frequencia = 50;
  const speed = 15;
  const larguraTela = container.offsetWidth;

  const mover = setInterval(() => {
    x += speed;
    const y = -Math.abs(Math.sin(x / frequencia)) * amplitude + 100;

    grug.style.transform = `translate(${x}px, ${y}px)`;

    if (x > larguraTela) {
      clearInterval(mover);
      grug.remove(); // remove do DOM ao sair da tela
    }
  }, 16);
}
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ativo");
    } else {
      entry.target.classList.remove("ativo");
    }
  });
}, {
  threshold: 0.3
});

// Observar todos os elementos com classe area, area2, ..., area5
document.querySelectorAll('.area, .area2, .area3, .area4, .area5')
  .forEach(el => observer.observe(el));



