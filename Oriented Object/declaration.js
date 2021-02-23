//Diferenças entre um Objeto em JS e uma função Construtora

const aluno = new Object 
console.log(typeof aluno) //O tipo aluno é um Objeto 
console.log(typeof Object) // O tipo Object carrega a função dentro dele
console.log(typeof new Object) // O operador new é responsável por transformar em Objeto

//função Construtora

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory Função de projeto

function CriarFuncionario(nome, salario,qdeF) {
    return {
        nome,
        salario,
        qdeF,
        gerSalario(){
            return (salario/30) * (30 - qdeF)
        }
    }
}

const f1 = CriarFuncionario('Jão', 7980, 4)
const f2 = CriarFuncionario('Mario', 11400, 1)
console.log(f1.gerSalario(), f2.gerSalario())