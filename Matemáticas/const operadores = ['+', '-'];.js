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
            resultado = numero1 - numero2;
            break;
        default:
            resultado = "no existe";
    }
    return resultado;
}

for (let index = 0; index < 5; index++) {
    const numero1 = generaNumero();
    const numero2 = generaNumero();
    const operadorActual = generaOperador()
    console.log(`Cuanto es ${numero1}${operadorActual}${numero2}`)
    const resultadoOperacion = matematica(numero1, operadorActual, numero2);
    console.log(resultadoOperacion)
    // Dentro del loop se pueda comprobar la entrada del usuario que sea igual al resultadoOperacion
}



console.log(resultadoOperacion);