function suma() {
    let a = parseInt(document.form.e1.value);
    let b = parseInt(document.form.e2.value);
    let result;
    result=a+b;
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;    
}
function resta() {
    let a = parseInt(document.form.e1.value);
    let b = parseInt(document.form.e2.value);
    let result;
    result=a-b;
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;    
}
function multiplicacion() {
    let a = parseInt(document.form.e1.value);
    let b = parseInt(document.form.e2.value);
    let result;
    result=a*b;
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;    
}
function division() {
    let a = parseInt(document.form.e1.value);
    let b = parseInt(document.form.e2.value);
    let result;
    result=Math.floor(a/b);
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;    
}

function factorial(){
    let a = parseInt(document.form.e1.value);
    let cont=1;
    let fact=1;
    let result;
    if(a==0){
        fact=1;
    }
    else{
        for (let i = 1; i <= a; i++) {
            fact=cont*fact;
            cont++;
        }
    }
        result = fact;
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;
}

function potencia() {
    let a = parseInt(document.form.e1.value);
    let b = parseInt(document.form.e2.value);
    let result;
    result = Math.pow(a,b);
    document.getElementById("result").value = result.length > 0 ? result.slice(1) : result;    
}