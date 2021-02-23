console.log(typeof Array, typeof new Array, typeof []) //O Array entrega uma função, enquanto os outros entregam Objetos

let aprovado = new Array('bia', 'carlos', 'ana') //Objeto de array criado

console.log(aprovado)

aprovado = ['Bia', 'Carlos', 'Ana']

console.log(aprovado[0]) //Posição de Bia
console.log(aprovado[2]) //Posição de Ana

aprovado[3] = 'Renan' //Adicionando "Renan" a posição 4 no Array 
aprovado.push('Luana') //Adicionando Luana ao final do Array
console.log(aprovado.length) // Tamanho do Array é de 5 posições

aprovado[9] = 'Brayan' //Brayan foi adicionado a posição 10 até então não declarada no array

console.log(aprovado.length) //Total de 10 Posições
console.log(aprovado[7] === undefined) //Checkagem, pois as posiçoes entre o indice 4 e o indice 9 não foram definidas, então retornam indefinidas

console.log(aprovado)

aprovado.sort()//Colocará em ordem numerica ou alfabética
console.log(aprovado)

delete aprovado[1] // Bia foi deletado
console.log(aprovado[1]) // Não sendo exibida
console.log(aprovado[2]) // Mostrando Brayan, que estava na ultima posição, passado com o sort para a 3 posição


//=-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-=

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro!!!! Pilha LIFO

console.log(pilotos)

pilotos.push('Verstappen') //ADD no final
console.log(pilotos)

pilotos.shift() //FILA FIFO
console.log(pilotos)

pilotos.unshift('Hamilton') //add no começo
console.log(pilotos)

pilotos.splice(2, 0, 'Bootas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)//massa vaza
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) //novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

//=-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-=

const aprovados = ['Renan', 'Carlos', 'Thiago']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Renan', 'Carlos', 'Thiago']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

//=-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-=

const nums = [1, 2, 3, 4, 5]

//For com propósito

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3   //Define como real| Duas casas | Subistitui o "." pela virgula
const paraDinherio = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinherio)
console.log(resultado)

//=-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-=

const quaseArray = {0: 'Renan', 1:'Luana', 2:'Brayan'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this) },
    enumrable: false
})

console.log(quaseArray[0])

const meuArray = ['Renan', 'Luana', 'Brayan']
console.log(quaseArray.toString(), meuArray)


