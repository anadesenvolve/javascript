document.getElementById("titulo").textContent = "Novo Título";

const itensLista = document.querySelectorAll("ul li");
itensLista.forEach(item => {
    item.style.color = "blue";
    item.style.fontWeight = "bold";
});

const paragrafos = document.querySelectorAll("p");
paragrafos.forEach(paragrafo => {
    paragrafo.classList.add("classe-paragrafo");
});

document.getElementById("meu-botao").textContent = "Novo Texto do Botão";
