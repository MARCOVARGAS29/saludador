function saludar(nombre, genero) {
  const hora = new Date().getHours();
  let saludo = "";

  if (hora >= 5 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  
  const prefijo = (genero === "masculino") ? "Bienvenido" : "Bienvenida";
  
  return saludo + ", " + prefijo + " " + nombre;
}

export default saludar;