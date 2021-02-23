//Funçoes Callback
const timeList = ["Pain", "RedCanids", "Kabum", "INTZ", "Flamengo", "KEYD"]

function imprimir(nome, indice){ //Função para exibir os times
  console.log(`${indice + 1}. ${nome}`)
}

timeList.forEach(imprimir) //Nesse trecho o forEach Será resposável por percorrer tod0 o array chamando a função imprimir para cada posição

//Diferença callback

const notas = [5.6, 8.8, 2.9, 9.8, 7.0, 6.9]

const notasMenorQue7 = notas => notas < 7 //Atribuindo a função para uma variavel
const notasBaixas = notas.filter(notasMenorQue7) //Função filter terá como objetivo manter o elemento caso retorne true,ou descarta-lo caso retorne false
console.log(notasBaixas) //Exibição final 5.6 2.9 6.9
