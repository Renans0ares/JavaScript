function instituicao(nota){
    let notacorrigida = arredonda(nota)
    if (notacorrigida >= 40){
        console.log(`Aprovado com a nota de ${notacorrigida}`)
    } else {
        console.log(`Reprovado com a nota de ${notacorrigida}`)
    }

}

function arredonda(nota){
    if (nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

instituicao(100)
instituicao(30)
instituicao(38)
instituicao(88)
instituicao(61)