function calcularAnoBissexto(ano){
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        return true
    } else {
        return false
    }
}
console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))