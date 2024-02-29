function mostrarMatrizCaracol() {
    let filas=parseInt(document.getElementById("e12").value);
    let columnas=parseInt(document.getElementById("e12").value);
    let matriz = new Array(filas);
    for (let i = 0; i < filas; i++) {
      matriz[i] = new Array(columnas);
    }
  
    let valor = 1;
    let inicioFila = 0,
      finFila = filas - 1,
      inicioColumna = 0,
      finColumna = columnas - 1;
  
    while (inicioFila <= finFila && inicioColumna <= finColumna) {
      for (let i = inicioColumna; i <= finColumna; i++) {
        matriz[inicioFila][i] = valor++;
      }
      inicioFila++;
  
      for (let i = inicioFila; i <= finFila; i++) {
        matriz[i][finColumna] = valor++;
      }
      finColumna--;
  
      if (inicioFila <= finFila) {
        for (let i = finColumna; i >= inicioColumna; i--) {
          matriz[finFila][i] = valor++;
        }
        finFila--;
      }
  
      if (inicioColumna <= finColumna) {
        for (let i = finFila; i >= inicioFila; i--) {
          matriz[i][inicioColumna] = valor++;
        }
        inicioColumna++;
      }
    }
    document.write("<br>");
    document.write("<center>");
    document.write("<table border='1' width=150px>");
  for (let fila = 0; fila < filas; fila++) {
    document.write("<tr>");
    for (let columna = 0; columna < columnas; columna++) {
      document.write("<td>" + matriz[fila][columna] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  document.write("</center>");
}
  