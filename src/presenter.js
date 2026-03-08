import saludar from "./saludador";

const boton = document.querySelector("#botonsaludar");
const divResultado = document.querySelector("#resultado-div");

boton.addEventListener("click", (event) => {
  event.preventDefault();
  divResultado.innerHTML = "<p>" + saludar() + "</p>";
});