let dobro = function(a){ //Exibindo Funções
  return a * 2
}

dobro = (a) => { //Função Arrow
  return a * 2
}

dobro = a => 2 * a //Ou sem o corpo com return implícito
console.log(dobro(Math.PI))

ola = () => 'Olá'
console.log(ola())

//Exemplo utilizando Arrow

function Pessoa(){
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 100)
}
new Pessoa
