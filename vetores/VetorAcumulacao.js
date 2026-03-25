function acumulacao(){
    let numeros = [1, 2, 3, 4, 5]
    let soma = 0

    numeros.forEach(function(numero){
        soma += numero
    })

    return soma
}
export { acumulacao }
