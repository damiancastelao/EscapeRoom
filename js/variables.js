var videos = ['videos/repair.mp4','videos/ing.mp4','videos/soci.mp4','videos/comu.mp4','videos/xela.mp4'];

var botonesNumeros =
    '<button type="button" class="btn btn-outline-secondary" id="0" value="0" onclick="darNumero(\'0\')">0</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="1" value="1" onclick="darNumero(\'1\')">1</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="2" value="2" onclick="darNumero(\'2\')">2</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="3" value="3" onclick="darNumero(\'3\')">3</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="4" value="4" onclick="darNumero(\'4\')">4</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="5" value="5" onclick="darNumero(\'5\')">5</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="6" value="6" onclick="darNumero(\'6\')">6</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="7" value="7" onclick="darNumero(\'7\')">7</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="8" value="8" onclick="darNumero(\'8\')">8</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="9" value="9" onclick="darNumero(\'9\')">9</button>';

var botonera = [
    botonesNumeros,
    botonesNumeros,
    '<button type="button" class="btn btn-outline-secondary" id="0" onclick="darNumero(\'e\')">e</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="1" onclick="darNumero(\'o\')">o</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="2" onclick="darNumero(\'S\')">s</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="3" onclick="darNumero(\'a\')">a</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="4" onclick="darNumero(\'P\')">p</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="5" onclick="darNumero(\'d\')">d</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="6" onclick="darNumero(\'w\')">w</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="7" onclick="darNumero(\'s\')">s</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="8" onclick="darNumero(\'l\')">l</button>\n' +
    '<button type="button" class="btn btn-outline-secondary" id="9" onclick="darNumero(\'r\')">r</button>',
    botonesNumeros,
    botonesNumeros
];

var botoneraRespuesta = [
    '<span id="respuesta1" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta2" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta3" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta4" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>',
    '<span id="respuesta1" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta2" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta3" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta4" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta5" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta6" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta7" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>',
    '<span id="respuesta1" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta2" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta3" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta4" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta5" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>-' +
    '<span id="respuesta6" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta7" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>-' +
    '<span id="respuesta8" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta9" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta10" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>',
    '<span id="respuesta1" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta2" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>-' +
    '<span id="respuesta3" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta4" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>-' +
    '<span id="respuesta5" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta6" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta7" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta8" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>',
    '<span id="respuesta1" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta2" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta3" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>' +
    '<span id="respuesta4" class=" btn btn-outline-secondary"><i class="fas fa-question"></i></span>',
];

var msgRetos = [
    'Introduce Repair Code System ',
    'Importante! Seguide a orde dos ingredientes... <br>1 Leite - ' +
    '2 chocolate en pó - ' +
    '3 ovos - ' +
    '4 mantequilla - ' +
    '5 azucre - ' +
    '6 fariña de trigo - ' +
    '7 POISON',
    'O calendario AZTECA chámase... ',
    'Data de nacemento do/a autor/a máis novo/a',
    'Cando atopedes a peza do puzzle, vestídevos de pirata,<br> collede a bandeira e dirixídevos á illa Lucernario.<br> O tesouro vos agarda!\n'
];

var respuestasCorrectas = [
    '3023',
    '8726351',
    'PedradoSol',
    '15091851',
    '1996'
];

var caracteresRespuesta = [4,7,10,8,4];

