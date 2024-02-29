function Sfactorial(){
    let num = parseInt(document.form.ejer4.value);
    let result1 = "";
    let result2 = "";
    let a=num,b=num;
    let aux1=0,aux2=0;
    let res1=0,res2=0;
    let res3=0,res4=0;
    let cont=1;
    let cont2=1;
    while (a>0) {
        if(cont==1){
            res1=a%10; 
            a=Math.floor(a/10);
            cont++;
            aux1=res1;   
        }
        else{
            res2=(res2*10)+(a%10);
            a=Math.floor(a/10);
            aux1=aux1*10;
        }
    }

    result1=rotar(res2);
    result1=result1+aux1;
    
    while (b>10) {
            res3=(res3*10)+(b%10);
            b=Math.floor(b/10);
            //aux2=aux2*10;
    }

    result2=rotar(res3);
    result2=(result2*10)+b;


    document.getElementById("result1").value = result1.length > 0 ? result1.slice(1) : result1;
    document.getElementById("result2").value = result2.length > 0 ? result2.slice(1) : result2;
}

function rotar(x){
    let a=0;
    let b=x;
while (b>0) {
    a=(a*10)+(b%10);
    b=Math.floor(b/10);
}
return a;
}