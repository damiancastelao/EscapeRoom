$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $('#video').fitVids();
});

var ano = "";
var contador = 0;
var myModal = document.getElementById('feito');

function darNumero(numero){
    ano = ano + numero;
    contador++;
    document.getElementById('respuesta').innerHTML = "<p>"+ano+"<p>";
    console.log("Año: " + ano + " contador: " + contador);
    if (contador==4 && ano=="3023") {
        $('#feito').modal('show');
        contador = 0;
        ano="";
    } else if (contador==4 && ano!="3023"){
        $('#nonfeito').modal('show');
        contador=0;
        ano="";
        document.getElementById('respuesta').innerText = "....";
    }
}