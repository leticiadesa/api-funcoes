function verificarDiaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda"
        default:
            return "Outro dia"
    }
}

export { verificarDiaSemana }