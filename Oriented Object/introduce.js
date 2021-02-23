//Declarando produto como uma constante que será uma função construtora e com isso damos inicio ao nosso objeto.
const produto = new Object
produto.nome = 'Pc Gamer' //O nome do produto
produto.preco = 6998.99 //Preço estimado

console.log(produto)

delete produto.preco //Deletando o preço relacionado ao produto
console.log(produto)
produto.preco = 5900.75 //Definindo um novo preco
produto.placa = 'RTX 3080' //Placa de brinde
console.log(produto)

Object.freeze(produto) //Congela o Objeto para não haver mais alterações
produto.nome = 'Mouse Gamer' //Tentativa de mudança
console.log(produto) //Sem alterações

const gestaoEstrategica = { //Situação hipotética
  nome: 'Departamento T.I',
  localizacao: 'Prefeitura',
  diretor: 'Josias',
  tecnicos:[{
    nome:'Erik',
    cargo: 'Efetivo'
  },{
    nome:'Bruno',
    cargo: 'Efetivo'
  }],
  estagiarios:[{
    nome:'Renan',
    cargo:'Ti',
    salario:1000
  },{
    nome:'Carlos',
    cargo:'TI',
    salario:1000
  },{
    nome:'Lucas',
    cargo:'Adm',
    salario:1000
  }]
}

console.log(gestaoEstrategica)
console.log("O departamento conta com " + gestaoEstrategica.estagiarios.length + " Estágiários")