function Vprimos(){
    let num=parseInt(document.getElementById("ejer8").value);
    cont=1;
    cont2=0;
    cont3=1;
        if(num==1){
            document.write("<center><h3>No es primo: "+num+"</h3></center>");
        }
        else{
            while (cont2<2) {
                if (num%cont3==0) {
                cont2++;
                cont3++;
                }    
                else{
                cont3++;
                }
            }
            if (cont3-1==num) {
                document.write("<center><h3>Es primo: "+num+"</h3></center>");
                cont++;
            
            }
            else{
                document.write("<center><h3>No es primo: "+num+"</h3></center>");
            }
        }
}