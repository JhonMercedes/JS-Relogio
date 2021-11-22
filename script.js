function atulizarTempo(){
    var display = document.querySelector('.display')

var agora = new Date(); 
var horario = corrigirHr(agora.getHours()) + ':' + corrigirHr(agora.getMinutes()) + ':' + corrigirHr(agora.getSeconds());


display.textContent = horario;

}

function corrigirHr(numero) {
    if(numero < 10 ) {
        numero = '0' + numero;
    }
    return numero;
}


atulizarTempo();

setInterval(atulizarTempo);
