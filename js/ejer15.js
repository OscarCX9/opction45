function convertirANumerosRomanos() {
    let numero = parseInt(document.form.ejer15.value);
    var romanos = "";
    let num=numero;
    var valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var letras = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
    for (var i = 0; i < valores.length; i++) {
      while (numero >= valores[i]) {
        romanos += letras[i];
        numero -= valores[i];
      }
    }
    document.write("<br>");
    document.write("<center>");
    document.write("<h3>Número original: " + num + "<h3>");
    document.write("<h3>Número en números romanos: " + romanos+"</h3>");
    document.write("</center>");
  }
  