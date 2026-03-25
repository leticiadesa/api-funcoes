import express from "express"

import { escreverBomDia } from './concatenacaoString/ConcatenacaoString1.js'
import { juntarNome } from './concatenacaoString/ConcatenacaoString2.js'

import { verificarNumero } from './estruturaCondicional/IfComposto.js'
import { verificarAprovacao } from './estruturaCondicional/IfSimples.js'
import { verificarParOuImpar } from './estruturaCondicional/IfTradicional.js'
import { verificarDiaSemana } from './estruturaCondicional/SwitchCase.js'
import { verificarResultado } from './estruturaCondicional/Ternario.js'

import { mostrarPares } from './lacoDeRepeticao/DoWhile.js'
import { mostrarNumeros } from './lacoDeRepeticao/DoWhile2.js'
import { mostrarTabuada } from './lacoDeRepeticao/For.js'
import { mostrarNumerosVetor } from './lacoDeRepeticao/ForEach.js'
import { mostrarDobro } from './lacoDeRepeticao/Map.js'
import { mostrarHelloWorld } from './lacoDeRepeticao/While.js'
import { mostrarTabuada1 } from './lacoDeRepeticao/While2.js'

import { somar, subtrair, multiplicar, dividir, potencia, raizQuadrada, restoDivisao } from './operadoresAritmeticos/OpAritmeticos.js'

import { verificarE } from "./operadoresLogicos/OpLogicoE.js"
import { verificarNao } from "./operadoresLogicos/OpLogicoNot.js"
import { verificarOu } from "./operadoresLogicos/OpLogicoOu.js"

import { diferente } from './operadoresRelacionais/OpRelacionaisDiferente.js'
import { igual } from './operadoresRelacionais/OpRelacionaisIgual.js'
import { maior } from './operadoresRelacionais/OpRelacionaisMaior.js'
import { maiorOuIgual } from './operadoresRelacionais/OpRelacionaisMaiorIgual.js'
import { menor } from './operadoresRelacionais/OpRelacionaisMenor.js'
import { menorOuIgual } from './operadoresRelacionais/OpRelacionaisMenorIgual.js'


import { acumulacao } from './vetores/VetorAcumulacao.js'
import { adicionarElemento } from './vetores/VetorAdicao.js'
import { buscarElemento } from './vetores/VetorBusca.js'
import { removerElemento } from './vetores/VetorRemocao.js'

const app = express()


app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Exercícios",
        rotas: [
            "/concatenacao",
            "/condicional",
            "/lacos",
            "/aritmeticos",
            "/vetores"
        ]
    })
})

// CONCATENACAO
app.get("/concatenacao", (req,res)=>{
    res.json({
        bomDia: escreverBomDia(),
        nome: juntarNome()
    })
})

// CONDICIONAIS
app.get("/condicional", (req,res)=>{
    res.json({
        numero: verificarNumero(10),
        aprovacao: verificarAprovacao(2),
        parImpar: verificarParOuImpar(5),
        diaSemana: verificarDiaSemana(1),
        resultado: verificarResultado(1)
    })
})

// LACOS
app.get("/lacos",(req,res)=>{
    res.json({
        pares: mostrarPares(),
        numeros: mostrarNumeros(),
        tabuadaFor: mostrarTabuada(10),
        vetor: mostrarNumerosVetor(),
        dobro: mostrarDobro(),
        hello: mostrarHelloWorld(),
        tabuadaWhile: mostrarTabuada1()
    })
})

// ARITMETICOS
app.get("/aritmeticos",(req,res) =>{
    res.json({
        soma: somar(5,3),
        subtracao: subtrair(10,4),
        multiplicacao: multiplicar(2,6),
        divisao: dividir(12,3),
        potencia: potencia(2,3),
        raiz: raizQuadrada(16),
        resto: restoDivisao(10,3),
    })
})
//LOGICOS 
app.get("/logicos",(req,res) =>{
    res.json({
        opLogicoE: verificarE(false),
        opLogicoNot: verificarNao(true),
        opLogicoOU: verificarOu(true),
    })
})

//RELACIONAIS 
app.get("/relacionais", (req,res) =>{
    res.json({
        diferente: diferente(1,2),
        igual: igual(2,2),
        maior: maior(1,10),
        maiorOuIgual: maiorOuIgual(3,9),
        menor: menor(2,0),
        menorOuIgual: menorOuIgual(6,3),
    })
})



// VETORES
app.get("/vetores",(req,res)=>{
    res.json({
        acumulacao: acumulacao(),
        adicionar: adicionarElemento(),
        buscar: buscarElemento(),
        remover: removerElemento()
    })
})

app.listen(3000, ()=>{
    console.log("Servidor rodando em http://localhost:3000")
})
