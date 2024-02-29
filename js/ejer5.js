function rotar(){
    let result1;
    //Proceso para calcular el tamaño
    let x=parseInt(document.getElementById("ejer5").value);
    let tamaño=0;
    let tam=x;
    while (tam>0) {
        tamaño++;    
        tam= Math.floor(tam/10);
    }
    //Proceso para crear el vector y mostrarlo
    let vector;
    let tamaño2=0;
    vector=new Array(tamaño);
    for (let i = tamaño-1; i > -1; i--) {
        vector[i]=x%10;
        x=Math.floor(x/10);
        if (vector[i]%2==0) {
            tamaño2++;
        }
    }
    let num1=0;
    for (let i = 0; i < tamaño; i++) {
           num1=(num1*10)+vector[i];
    }
    //Proceso para crear otro vector con los pares
    let aux=0;
    let vector2;
    vector2=new Array(tamaño2);
    for (let i = 0; i < tamaño; i++) {
        if (vector[i]%2==0) {
         vector2[aux]=vector[i];
         aux++;   
        }
    }
    //Proceso para rotar
    let vector3;
    let auxi=0;
    vector3=new Array(tamaño2);
    for (let i = 0; i < tamaño2; i++) {
        if(i==0){
            vector3[i]=vector2[tamaño2-1];
        }
        else{
            vector3[i]=vector2[auxi];
            auxi++;
        }
    }
    vector2=vector3;
    //Proceso para integrar al vector principal
    let contador=0;
    for (let i = 0; i < tamaño; i++) {
        if(vector[i]%2==0){
            vector[i]=vector2[contador];
            contador++;
        }
    }
    let num2=0;
    for (let i = 0; i < tamaño; i++) {
           num2=(num2*10)+vector[i];
    }
    result1=num2;
    document.getElementById("result1").value = result1.length > 0 ? result1.slice(1) : result1;
}