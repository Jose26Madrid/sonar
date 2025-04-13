function saludo(nombre) {
    return `Hola, ${nombre || "mundo"}!`;
  }
  
  console.log(saludo("SonarQube"));  