function Vfibo() {
    let limite = parseInt(document.form.ejer10.value);
    let a = -1, b = 1, c;
    let vector;
    vector=new Array(limite);
    for (let i = 0; i < limite; i++) {
        c = a + b;
        vector[i] = c;
        a = b;
        b = c;
    }
    document.write("<table border=1 height=20><tr>");
    for (let i = 0; i < limite; i++) {
        c = a + b;
        document.write("<td width=20><center><h3>"+vector[i]+"</h3></center></td>");
        a = b;
        b = c;
    }
    document.write("</tr></table>");
}