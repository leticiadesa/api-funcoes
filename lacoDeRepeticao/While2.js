function mostrarTabuada1() {
    let i = 1
    let resultado = []

    while (i <= 10) {
        resultado.push("1 x " + i + " = " + (1 * i))
        i++
    }

    return resultado
}

export { mostrarTabuada1 }