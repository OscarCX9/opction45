function encontrarDigitosRepetidos() {
    let numero = parseInt(document.getElementById("ejer6").value);
    if (isNaN(numero) || !Number.isInteger(numero)) {
        alert('Ingrese un número entero válido');
        return;
    }

    const numeroStr = Math.abs(numero).toString(); 
    const frecuenciaDigitos = {};
    const digitosRepetidos = [];

    for (let i = 0; i < numeroStr.length; i++) {
        const digito = numeroStr[i];

        if (frecuenciaDigitos[digito]) {
            digitosRepetidos.push(digito);
        } else {
            frecuenciaDigitos[digito] = 1;
        }
    }

    if (digitosRepetidos.length > 0) {
        document.write("<center>");
        document.write("<h2>Número ingresado: "+numero+"</h2>");
        document.write("<h2>");
        document.write(`Dígitos repetidos: ${digitosRepetidos.join(', ')}`);
        document.write("</h2>");
        document.write("</center>");
    } else {
        document.write("<center>");
        document.write("<h2>Número ingresado: "+numero+"</h2>");
        document.write("<h2>");
        document.write('No hay dígitos repetidos');
        document.write("</h2>");
        document.write("</center>");
    }
}