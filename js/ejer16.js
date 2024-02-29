function generatePascalTable() {
    let rows = parseInt(document.form.ejer16.value);
    function binomialCoefficient(n, k) {
        if (k === 0 || k === n) {
            return 1;
        } else {
            return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
        }
    }
    document.write("<br>");
    document.write("<center>");
    document.write('<table border="1" width=150px>');
    for (var i = 0; i < rows; i++) {
        document.write('<tr>');
        for (var j = 0; j <= i; j++) {
            document.write('<td>' + binomialCoefficient(i, j) + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
    document.write("</center>");
}