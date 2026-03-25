function mostrarPares() {
    let i = 0
    let resultado = []

    do {
        resultado.push(i)
        i += 2
    } while (i <= 20)

    return resultado
}

export { mostrarPares }