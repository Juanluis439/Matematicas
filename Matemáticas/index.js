const operadores = ['+', '-'];

const generaOperador =()=> operadores[Math.floor(Math.random() * operadores.length)];
const generaNumero = () =>  Math.floor(Math.random() * 100);


function matematica(numero1, operador, numero2){
    let resultado;
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = Math.max(numero1 - numero2, 0);            
            break;
        default:
            resultado = "no existe";
    }
    return resultado;
}

function mostrarOperacion() {
    const numero1 = generaNumero();
    const numero2 = generaNumero();
    const operadorActual = generaOperador();
    const operacion = `Cuánto es ${numero1} ${operadorActual} ${numero2}`;
    const resultadoOperacion = matematica(numero1, operadorActual, numero2);
    document.getElementById('operacion').innerText = operacion;
    return resultadoOperacion;
}

const resultadoOperacionActual = mostrarOperacion();

function verificarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
    
    if (respuestaUsuario === resultadoOperacionActual) {
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }
}

