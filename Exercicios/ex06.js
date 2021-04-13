/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalI, juros, tempoAplicacao){
    let montante = capitalI * juros * tempoAplicacao
    console.log(`O montante da aplicação de Juros Simples é ${capitalI + montante}`)
    //Ou return capitalI * juros * tempoAplicacao
}
function jurosComposto(capitalI, juros, tempoAplicacao){
    let montante = capitalI * (1 + juros) ** tempoAplicacao
    console.log(`O montante da aplicação de Juros Composto é ${montante}`)
    //Ou return capitalI (1 + juros)**tempoAplicacao
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 10/100,2)
