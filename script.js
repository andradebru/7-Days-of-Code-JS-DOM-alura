const element = document.getElementById("myBtn");
element.addEventListener("click", validateForm, imprimirSalvar);

function imprimirSalvar() {
  // console.log("Botão salvar clicado");
  console.log("nome = ", document.getElementById("name").value);
  console.log("data = ", document.getElementById("birth-date").value);
}

function validateForm() {
  let comprimentoNome = document.formCadastro.name.value.length;
  if (comprimentoNome >= 3 && comprimentoNome <= 120) {
    console.log("nome valido");
  } else {
    alert("nome invalido");
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
