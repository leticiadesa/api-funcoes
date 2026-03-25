function mostrarNumeros() {
    let i = 1
    let resultado = []

    do {
        resultado.push(i)
        i++
    } while (i <= 10)

    return resultado
}

export { mostrarNumeros }