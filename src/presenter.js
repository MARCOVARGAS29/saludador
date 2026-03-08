import saludar from "./saludador.js";
const boton = document.querySelector("#botonsaludar");
const divResultado = document.querySelector("#resultado-div");


boton.addEventListener("click", (event) => {
  event.preventDefault(); 
  
  const nombre = document.querySelector("#nombre").value;
  const genero = document.querySelector("#genero").value;
  const edad = Number.parseInt(document.querySelector("#edad").value);
  const idioma = document.querySelector("#idioma").value;

  // Verifica que 'saludar' reciba los 4 argumentos
  divResultado.innerHTML = "<p>" + saludar(nombre, genero, edad, idioma) + "</p>";
});