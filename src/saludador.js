function saludar(nombre, genero, edad, idioma) {
  const hora = new Date().getHours();
  
  
  const textos = {
    es: {
      manana: "Buenos días", tarde: "Buenas tardes", noche: "Buenas noches",
      bienvenido: "Bienvenido", bienvenida: "Bienvenida", sr: "Sr. ", sra: "Sra. "
    },
    en: {
      manana: "Good morning", tarde: "Good afternoon", noche: "Good evening",
      bienvenido: "Welcome", bienvenida: "Welcome", sr: "Mr. ", sra: "Ms. "
    }
  };

  const t = textos[idioma];
  
  
  let saludo = (hora < 12) ? t.manana : (hora < 20) ? t.tarde : t.noche;

 
  const prefijo = (genero === "masculino") ? t.bienvenido : t.bienvenida;
  let tratamiento = (edad > 30) ? ((genero === "masculino") ? t.sr : t.sra) : "";
  
  return `${saludo}, ${prefijo} ${tratamiento}${nombre}`;
}

export default saludar;