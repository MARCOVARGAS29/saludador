import saludar from "./saludador";

const boton = document.querySelector("#botonsaludar");
const divResultado = document.querySelector("#resultado-div");
const inputNombre = document.querySelector("#nombre");
const inputGenero = document.querySelector("#genero");
const inputEdad = document.querySelector("#edad");

boton.addEventListener("click", (event) => {
  event.preventDefault();
  
  const nombre = inputNombre.value;
  const genero = inputGenero.value;
  const edad = Number.parseInt(inputEdad.value);

  
  divResultado.innerHTML = "<p>" + saludar(nombre, genero, edad) + "</p>";
});