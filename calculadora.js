const input = document.getElementById("input");
const buttons = document.querySelectorAll(".input-button");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("limpar");
const deleteButton = document.getElementById("apagar");

let inputString = "";

// Adiciona eventos de clique aos botões de números e operações
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputString += button.value;
    input.value = inputString;
  });
});

// Adiciona evento de clique ao botão de igual
equalButton.addEventListener("click", () => {
  inputString = eval(inputString);
  input.value = inputString;
});

// Adiciona evento de clique ao botão de limpar
clearButton.addEventListener("click", () => {
  inputString = "";
  input.value = "0";
});

// Adiciona evento de clique ao botão de apagar
deleteButton.addEventListener("click", () => {
  inputString = inputString.slice(0, -1);
  input.value = inputString;
});