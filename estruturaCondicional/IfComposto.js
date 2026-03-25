function verificarNumero(numero) {
    if (numero > 0) {
        return "Número positivo"
    } else if (numero < 0) {
        return "Número negativo"
    } else {
        return "Número é zero"
    }
}

export { verificarNumero }