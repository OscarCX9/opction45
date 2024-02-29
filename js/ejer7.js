function capicua(){
    let x=parseInt(document.getElementById("ejer7").value);
    let z=x;
    let y;
    let w=0;
    while (z>0) {
        y=z%10;
        w=(w*10)+y;
        z=Math.floor(z/10);
    }
    if (w==x) {
        document.write("<center><h1>El número "+x+" es capicúa : "+w+"</h1></center>");    
    }
    else{
        document.write("<center><h1>El número "+x+" no es capicúa : "+w+"</h1></center>");
    }
    }