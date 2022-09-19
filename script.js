const element = document.getElementById("myBtn");
element.addEventListener("click", imprimirSalvar);

function imprimirSalvar() {
  // console.log("Botão salvar clicado");
  console.log("nome = ", document.getElementById("name").value);
  console.log("data = ", document.getElementById("birth-date").value);
}
