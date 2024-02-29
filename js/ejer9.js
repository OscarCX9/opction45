function primos(){
    let lim = parseInt(document.form.ejer9.value);
    cont=1;
    cont2=0;
    cont3=1;
    x=2;
    let result="";
    while (cont<=lim) {
        while (cont2<2) {
            if (x%cont3==0) {
            cont2++;
            cont3++;
            }    
            else{
            cont3++;
            }
        }
        if (cont3-1==x) {
            result += "," + x;
            cont++;
            x++;
        }
        else{
            x++;
        }
        cont2=0;
        cont3=1;
    }
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;
}