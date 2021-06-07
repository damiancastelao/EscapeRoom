var _respuesta = "";
var _contador = 0;
var retoActual = 4;

// calabera, reto conseguido
var checkReto = '<i class="fas fa-skull-crossbones"></i>';
var myVideo = document.getElementById('my-video');

// al cargar la pagina
$(document).ready(actualizar(retoActual));

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e8; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function darNumero(numero){
    _respuesta = _respuesta + numero;
    _contador++;
    // rellenamos la respuesta segun vayan pulsando los botones
    $('#respuesta'+_contador)[0].innerText = numero;

    if (_contador>=caracteresRespuesta[retoActual] && _respuesta==respuestasCorrectas[retoActual]) {

        // conexion via mqtt

        // debug
        console.log("Respuesta: " + _respuesta + " contador: " + _contador);

        for (var i=1; i<8; i++) {
            // mqtt
            message = new Messaging.Message("ON");
            message.destinationName = "cmnd/tasmota/POWER" + i;
            client.send(message);
            sleep(2000);
            message = new Messaging.Message("OFF");
            message.destinationName = "cmnd/tasmota/POWER" + i;
            client.send(message);
        }
        // Respuesta Correcta
        $('#feito').modal('show');

        // check
        $('#reto'+retoActual)[0].innerHTML = checkReto;
        // TODO Hacemos rodar los engranajes
        $('#feito').modal('show')
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
    // no hai video
    // texto del reto
    $('#msg')[0].innerHTML = 'Ano da publicación:';
    // botonera del reto
    $('#botonera')[0].innerHTML = botonera[reto];
    // contador y respuesta a cero
    $('#botonerarespuesta')[0].innerHTML = botoneraRespuesta[reto];
    // solo porque es la pagina del ultimo reto
    for(var i=0; i<4; i++) {
        $('#reto'+i)[0].innerHTML = checkReto;
    }

}
