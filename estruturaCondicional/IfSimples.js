function verificarAprovacao(nota) {
    if (nota >= 6) {
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

export { verificarAprovacao }