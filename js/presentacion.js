var respuesta = "";
var contador = 0;

var myVideo = document.getElementById('my-video');

var videos = ['videos/presentacionInsta.mp4','videos/reto.mp4'];
var retoActual = 0;
var respuestasCorrectas = ['3023','6666','5555','4444','3333'];
var retoConseguido = ['0', '0'];
var msgRetos = ['Introduce el año del futuro, desde donde viene el mensaje','El número de la bestia','wuow','guau','yeah'];
//'<i class="fas fa-check"></i>';
var checkReto = '<i class="fas fa-skull-crossbones"></i>';
function darNumero(numero){
    respuesta = respuesta + numero;
    contador++;
    // rellenamos la respuesta segun vayan pulsando los otones
    $('#respuesta'+contador)[0].innerText = numero;
    console.log("Año: " + respuesta + " contador: " + contador);
    if (contador>=4 && respuesta==respuestasCorrectas[retoActual]) {
        $('#feito').modal('show');
        // check
        $('#reto'+retoActual)[0].innerHTML = checkReto;
        // sumamos uno al reto
        retoActual = retoActual + 1;
        // cargamos el video nuevo
        myVideo.setAttribute('src', videos[retoActual])
        // texto del reto
        $('#msg')[0].innerHTML = msgRetos[retoActual];
        // contador y respuesta a cero
        contador = 0;
        respuesta="";
    } else if (contador>=4 && respuesta!=respuestasCorrectas[retoActual]){
        $('#nonfeito').modal('show');
        contador=0;
        respuesta="";
        // reseteamos la respuesta con '?'
        for(var i=1; i<5; i++) {
            $('#respuesta'+i)[0].innerHTML='<i class="fas fa-question"></i>';
        }
    }
}
