function fiboB() {
    let limite = parseInt(document.form.ejer2.value);
    let a=0;
    let result = "";

    for (let i = 0; i < limite; i++) {
        result += "," + decimalToBinary(a);
        a++;
    }

    // Mostrar la serie en el input, eliminando la coma inicial solo si la serie no está vacía
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;
}
function decimalToBinary(decimal) {
    // Verificar si el argumento es un número
    if (typeof decimal !== 'number' || isNaN(decimal)) {
        return 'Ingrese un número válido';
    }

    // Verificar si el número es entero
    if (decimal % 1 !== 0) {
        return 'Ingrese un número entero';
    }

    // Convertir a binario
    return decimal.toString(2);
}