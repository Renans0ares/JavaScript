//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function MostrarNafuncao(a, b){
    console.log('A soma é ', a + b)
    console.log('A subtração é ', a - b)
    console.log('A multiplicação é ', a * b)
    console.log('A divisão é ', a / b)
}

MostrarNafuncao(6, 2)

function queretorna(a, b){
    return a + b
}

console.log(queretorna(2, 2))

// OU

function calcularoperacao(op1, op2){
    console.log(op1 + op2, op1 - op2, op1 * op2, op1 / op2)
}

calcularoperacao(2,2)