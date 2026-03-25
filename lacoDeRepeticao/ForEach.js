function mostrarNumerosVetor() {  
    let numeros = [10, 20, 30]  
    let resultado = []  

    numeros.forEach(n => {  
        resultado.push(n)  
    })  

    return resultado  
}  

export { mostrarNumerosVetor }