const pessoa = {
  cumprimentos: 'Bom dia',
  falar() { //Posso adicionar uma função em um objeto
    console.log(this.cumprimentos) //O this está apontando o objeto 
  }
}

pessoa.falar()
const falar = pessoa.falar //Isso gera um conflito devido ao this apontar diretamente ao Objeto, do que a varia´vel "falar" // Conflito de paradigmas de funçoes e OO
falar() //undefined

const falarDePessoas = pessoa.falar.bind(pessoa) //A função bind irá indicar o this no objeto selecionado, no caso "Pessoa" 
falarDePessoas()

//=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-==-

function Pessoa(){ //Função Pessoa 
  this.idade = 0 //Definindo Porque?

  setInterval(function(){
    this.idade++ //Idade vai adicionar + 1 a cada 1 segundo
    console.log(this.idade)
  }.bind(this), 1000) //A função bind permite que o this aponte para a idade e impeça de dar NaN
}
new Pessoa //Objeto Pessoa Instaciado

