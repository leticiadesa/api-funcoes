function mostrarHelloWorld() {
    let i = 0
    let resultado = []

    while (i < 10) {
        resultado.push("Hello World")
        i++
    }

    return resultado
}

export { mostrarHelloWorld }