//O objeto é uma coleção Dinâmica de Chaves e Valores
const pessoa = {
  nome: 'Renan',
  idade: 19,
  altura: 1.75
}

console.log(Object.keys(pessoa)) //keys são as chaves do Objeto, no caso, "Nome, idade, altura"

console.log(Object.values(pessoa))//Através de ".values" é possível pegar os valores das chaves do objeto selecionado

console.log(Object.entries(pessoa))//entries vai gerar um Array com as chaves e valores do Objeto desejado

//forEach será usado para percorrer o Array Criado exibir atraves da função
Object.entries(pessoa).forEach(([chaves, valores]) => {

  console.log(`${chaves}: ${valores}`)
  // OU console.log(`${e[0]}: ${e[1]}`)

})

Object.defineProperty(pessoa, 'linguagemProgramacao', {
  enumerable:true, //Vai ser listada com for lido o Objeto
  writable:false, //Não poderá ser alterada
  value:'JavaScript'
})

pessoa.linguagemProgramacao =  'C#'

console.log()
console.log(pessoa.linguagemProgramacao)
console.log(Object.keys(pessoa)) //linguagemProgramacao Foi listada