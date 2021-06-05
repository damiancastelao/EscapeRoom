var _respuesta = "";
var _contador = 0;
var retoActual = 0;

// calabera, reto conseguido
var checkReto = '<i class="fas fa-skull-crossbones"></i>';
var myVideo = document.getElementById('my-video');

// al cargar la pagina
$(document).ready(actualizar(retoActual));

function darNumero(numero){
    _respuesta = _respuesta + numero;
    _contador++;
    // rellenamos la respuesta segun vayan pulsando los botones
    $('#respuesta'+_contador)[0].innerText = numero;

    // debug
    console.log("Respuesta: " + _respuesta + " contador: " + _contador);

    if (_contador>=caracteresRespuesta[retoActual] && _respuesta==respuestasCorrectas[retoActual]) {
        // Respuesta Correcta
        // $('#feito').modal('show');
        // check
        $('#reto'+retoActual)[0].innerHTML = checkReto;
        // sumamos uno al reto
        retoActual = retoActual +1;
        // actualizamos pagina para el siguiente reto
        actualizar(retoActual);
        _contador = 0;
        _respuesta="";
    } else if (_contador>=caracteresRespuesta[retoActual] && _respuesta!=respuestasCorrectas[retoActual]){
        $('#nonfeito').modal('show');
        // contador y respuesta a cero
        _contador=0;
        _respuesta="";
        // reseteamos la respuesta con '?'
        for(var i=1; i<caracteresRespuesta[retoActual]+1; i++) {
            $('#respuesta'+i)[0].innerHTML='<i class="fas fa-question"></i>';
        }
    }
}

/**
 * Actualizamos pagina, la descripción del reto, la botonera, la respuesta
 * @param reto correspondiente
 */
function actualizar(reto){
    // cargamos el video nuevo
    myVideo.setAttribute('src', videos[reto]);
    myVideo.setAttribute('poster', 'images/'+retoActual+'.png');
    // texto del reto
    $('#msg')[0].innerHTML = msgRetos[reto];
    // botonera del reto
    $('#botonera')[0].innerHTML = botonera[reto];
    // contador y respuesta a cero
    $('#botonerarespuesta')[0].innerHTML = botoneraRespuesta[reto];
}
