const operadores = ['+', '-'];
const operador = Math.floor(Math.random() * operadores.length);


const numero1 = Math.floor(Math.random() * 100);
const numero2 = Math.floor(Math.random() * 100);

function matematica(numero1, operador, numero2){
    let resultado;
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        default:
            resultado = "no existe";
    }
    return resultado;
}

const resultadoOperacion = matematica(numero1, operador, numero2);

console.log(resultadoOperacion);