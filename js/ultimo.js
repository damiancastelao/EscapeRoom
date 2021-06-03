var ano = "";
var contador = 0;
var myModal = document.getElementById('feito');

function darNumero(numero){
    ano = ano + numero;
    contador++;
    document.getElementById('respuesta').innerHTML = "<p>"+ano+"<p>";
    console.log("Año: " + ano + " contador: " + contador);
    if (contador==3 && ano=="666") {
        //$('#feito').modal('show');
        document.getElementById('my-video').style.display = 'inline';
        contador = 0;
        ano="";
    } else if (contador==3 && ano!="666"){
        $('#nonfeito').modal('show');
        contador=0;
        ano="";
        document.getElementById('respuesta').innerText = "....";
    }
}
