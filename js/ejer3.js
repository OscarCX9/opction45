function Sfactorial(){
    let limite = parseInt(document.form.ejer3.value);
    let x=1;
    let cont=1;
    let fact=1;
    let suma=0;
    let result1 = "";
    let result2 = "";
    let result3 = "";
    for (let i = 0; i < limite; i++) {
        result1 += " "+x+"! + ";
        x++;
    }
    x=1;
    for (let i = 0; i < limite; i++) {
            if(x==0){
                suma=suma+1;
            }
            else{
                for (let j = 1; j <= x; j++) {
                    fact=cont*fact;
                    cont++;
                }
                suma=suma+fact;
                result3 += " "+fact+" + ";
            }
        cont=1;
        fact=1;
        x++;
    }
    result2=suma;
    document.getElementById("result1").value = result1.length > 0 ? result1.slice(1) : result1;
    document.getElementById("result2").value = result2.length > 0 ? result2.slice(1) : result2;
    document.getElementById("result3").value = result3.length > 0 ? result3.slice(1) : result3;
}