const element = document.getElementById("myBtn");
element.addEventListener("click", validateForm, imprimirSalvar);

function imprimirSalvar() {
  // console.log("Botão salvar clicado");
  console.log("nome = ", document.getElementById("name").value);
  console.log("data = ", document.getElementById("birth-date").value);
}

function validateForm() {
  let nome = document.formCadastro.name.value.length;
  if (nome > 3 && nome < 120) {
    console.log("nome valido");
  } else {
    console.log("nome invalido");
  }
}

function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert("message");
    return false;
  }
}
