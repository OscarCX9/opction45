function verificarPalindromo() {
    var palabraInput = document.getElementById('ejer12');
    var palabra = palabraInput.value;
    palabra = palabra.toLowerCase(); // Convertir la palabra a minúsculas para hacer la comparación sin distinción entre mayúsculas y minúsculas
    
    var esPalindromo = true;  // Declarar e inicializar la variable esPalindromo en true
  
    for (var i = 0; i < palabra.length / 2; i++) {
      if (palabra[i] !== palabra[palabra.length - 1 - i]) {
        esPalindromo = false;
        break;
      }
    }
        document.write("<br>");
    if (esPalindromo) {
        document.write("<center><h2>Es un palíndromo la palabra : "+palabra+"</h2></center>");
    } else {
        document.write("<center><h2>No es un palíndromo la palabra : "+palabra+"</h2></center>");
    }
  }
  