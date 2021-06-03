var ano = "";
var contador = 0;

var myVideo = document.getElementById('my-video');
var myMsg = document.getElementById('msg');

var videos = ['videos/presentacionInsta.mp4','videos/reto.mp4'];
var retoConseguido = ['0', '0'];
var msgRetos = ['Introduce el año del futuro, desde donde viene el mensaje','El número de la bestia']

function darNumero(numero){
    ano = ano + numero;
    contador++;
    document.getElementById('respuesta').innerHTML = "<p>"+ano+"<p>";
    console.log("Año: " + ano + " contador: " + contador);
    if (contador==4 && ano=="3023") {
        $('#feito').modal('show');
        myVideo.setAttribute('src', videos[1])
        myMsg.innerHTML = msgRetos[1];
        contador = 0;
        ano="";
    } else if (contador==4 && ano!="3023"){
        $('#nonfeito').modal('show');
        contador=0;
        ano="";
        document.getElementById('respuesta').innerText = "....";
    }
}
