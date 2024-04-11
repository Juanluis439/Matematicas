const operadores = ['+', '-'];
let aciertos = 0;
let fallos = 0;

const generaOperador =()=> operadores[Math.floor(Math.random() * operadores.length)];
const generaNumero = () =>  Math.floor(Math.random() * 50);


function matematica(numero1, operador, numero2){
    let resultado;
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = Math.abs(numero1 - numero2);            
            break;
        default:
            resultado = "no existe";
    }
    return resultado;
}

function mostrarOperacion() {
    let numero1 = generaNumero();
    let numero2 = generaNumero();
    const operadorActual = generaOperador();
    if(operadorActual === "-" && numero2 > numero1){
        let temp = numero2
        numero2 = numero1
        numero1 = temp
    }
    console.log(numero1, numero2, operadorActual)
    const operacion = `Cuánto es ${numero1} ${operadorActual} ${numero2}`;
    const resultadoOperacion = matematica(numero1, operadorActual, numero2);
    document.getElementById('operacion').innerText = operacion;
    return resultadoOperacion;
}

let resultadoOperacionActual = mostrarOperacion();

function verificarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
    
    if (respuestaUsuario === resultadoOperacionActual) {
        aciertos++;
        document.getElementById('aciertos').innerText = aciertos;
        document.getElementById('respuesta').value = " ";
        resultadoOperacionActual = mostrarOperacion();
    } else {
        fallos++;
        document.getElementById('fallos').innerText = fallos;
        document.getElementById('respuesta').value = " ";
        resultadoOperacionActual = mostrarOperacion();
    }

    
}

