function prodrol() {
    console.log("Função prodrol() foi chamada");
    const section = document.getElementById("produtos");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log("Elemento com ID 'produtos' não encontrado");
    }
}