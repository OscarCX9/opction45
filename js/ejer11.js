function generarSerieExponencial() {
    let n = parseInt(document.form.ejer11.value);
    var a = 2;
    var r = 3;
    let result="";
    var serie = [];
    for (var i = 0; i < n; i++) {
      serie.push(a * Math.pow(r, i));
    }
    for (let i = 0; i < n; i++) {
        result += "," + serie[i];
        document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;
    }
}