import saludar from "./saludador";

const boton = document.querySelector("#botonsaludar");
const divResultado = document.querySelector("#resultado-div");
const inputNombre = document.querySelector("#nombre"); // Capturamos el input

boton.addEventListener("click", (event) => {
  event.preventDefault();
  
  const nombre = inputNombre.value; // Obtenemos el texto
  divResultado.innerHTML = "<p>" + saludar(nombre) + "</p>";
});