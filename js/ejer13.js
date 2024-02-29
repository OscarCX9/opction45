function invertirCadena() {
    var cadenaInput = document.getElementById('ejer13');
    var cadena = cadenaInput.value;
    var cadenaInvertida = "";
    
    for (var i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    document.write("<br>");
    document.write("<center>");
    document.write("<h3>Cadena original: " + cadena + "</h3>");
    document.write("<h3>Cadena invertida: " + cadenaInvertida+"</h3>");
    document.write("</center>");
  }