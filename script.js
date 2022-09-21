const btnSalvarTabela = document.getElementById("myBtn");
btnSalvarTabela.addEventListener("click", imprimirSalvar);
btnSalvarTabela.addEventListener("click", validateForm);
btnSalvarTabela.addEventListener("click", addDadosEmTabela);

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

// function allLetter(inputtxt) {
//   var letters = /^[A-Za-z]+$/;
//   if (inputtxt.value.match(letters)) {
//     return true;
//   } else {
//     alert("message");
//     return false;
//   }
// }

// const btnSalvarTabela = document.getElementById(myBtn);

function addDadosEmTabela() {
  console.log("o botao foi clicado com sucesso");
}
// function(event){
// 	event.preventDefault(),
// 	console.log('o que acontece dps')
// }
