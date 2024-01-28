//declaracion de variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

    // Esta función asigna un texto a un elemento HTML específico
    function asignarTextoElemento(elemento, texto) {
    // Selecciona el elemento HTML utilizando el selector proporcionado
    let elementoHTML = document.querySelector(elemento);
    // Asigna el texto al contenido interno del elemento
    elementoHTML.innerHTML = texto;
    return;
}
//funcion para la verificacion de intentos
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{//El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//funcion para generar un numero secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sortemamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
    }
    }

}
//funcion para limpiar la caja
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
//funcion para colocar las condiciones iniciales
function condicionesIniciales(){
// Asigna el texto 'juego del numero secreto' al elemento h1
asignarTextoElemento('h1', 'juego del numero secreto');
// Asigna el texto 'Indica un numero del 1 al 10' al elemento p
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

//funcion para reiniciar el juego
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatoreo
    //inicializar el numero de intentos
    mensajeIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();
