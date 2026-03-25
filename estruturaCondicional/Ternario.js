function verificarResultado(nota) {
    let resultado = nota >= 6 ? "Aprovado" : "Reprovado"
    return "Resultado: " + resultado
}

export { verificarResultado }