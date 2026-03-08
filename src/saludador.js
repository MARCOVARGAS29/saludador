function saludar(nombre, genero, edad) {
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
  let tratamiento = "";
  
  if (edad > 30) {
    tratamiento = (genero === "masculino") ? "Sr. " : "Sra. ";
  }


  return `${saludo}, ${prefijo} ${tratamiento}${nombre}`;
}

export default saludar;