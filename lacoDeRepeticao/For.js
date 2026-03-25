function mostrarTabuada(numero) {
    let resultado = []

    for (let i = 1; i <= 10; i++) {
        resultado.push(numero + " x " + i + " = " + (numero * i))
    }

    return resultado
}

export { mostrarTabuada }