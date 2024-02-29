function fibo() {
        let limite = parseInt(document.form.ejer1.value);
        let a = -1, b = 1, c;
        let result = "";

        for (let i = 0; i < limite; i++) {
            c = a + b;
            result += "," + c;
            a = b;
            b = c;
        }

        // Mostrar la serie en el input, eliminando la coma inicial solo si la serie no está vacía
        document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;
}