let MaximoNumeros = prompt('Indica el numero maximo');
let NumeroSecreto = 0;
let Intentos = 1;
let listaNumerosSorteados = [];


function AsignarTextoElemento(elemento, texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento(){
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    
    if(NumeroDeUsuario === NumeroSecreto){
        AsignarTextoElemento('P', `Acertaste el número en ${Intentos} ${(Intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(NumeroDeUsuario > NumeroSecreto){
            AsignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            AsignarTextoElemento('p', 'El numero secreto es mayor');
        }
        Intentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja() {
    //o se puede usar document.getElementById() para buscar por elemento
    //en este caso se usa querySelector con un # para usarlo con Id
    document.querySelector('#ValorUsuario').value = '';

}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*MaximoNumeros)+1;
    //si ya se sorteo todos los números
    if(listaNumerosSorteados.length == MaximoNumeros){
        AsignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{ 
        //si el número generado esta incluido en la lista
        console.log(NumeroGenerado);
        console.log(listaNumerosSorteados);
        if(listaNumerosSorteados.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}

function CondicionesIniciales(){
    AsignarTextoElemento('H1', 'Juego del número secreto');
    AsignarTextoElemento('p', `Indica un número del 1 al ${MaximoNumeros}`);
    //Generar el numero aleatorio
    NumeroSecreto =GenerarNumeroSecreto();
    //inicializar el número de intentos
    Intentos = 1;
}

function ReiniciarJuego(){
    //Limpiar caja
    LimpiarCaja();
    //Indicar mensaje de intervalo de números y el numero aleatorio
    CondicionesIniciales();
    //desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

CondicionesIniciales();
