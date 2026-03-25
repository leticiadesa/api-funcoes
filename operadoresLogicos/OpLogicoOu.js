function verificarOu(a, b){
    if(a || b){
        return "Pelo menos um é verdadeiro"
    }else{
        return "Ambos são falsos"
    }
}

export { verificarOu }