read = require('readline-sync')

let tabuleiro = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-'],
  ]

function mostrarTabuleiro() {
    console.log(tabuleiro[0])
    console.log(tabuleiro[1])
    console.log(tabuleiro[2])
  }


function perguntaX() {
    let posicao = []
    let linha = Number(read.question('Escolha a linha pra por X: '))
    let coluna = Number(read.question('Escolha a coluna pra por o X: '))
    return [linha, coluna]

}

function perguntaO() {
    let posicaoO = []
    linhaO = Number(read.question('Escolha a linha pra por O: '))
    colunaO = Number(read.question('Escolha a coluna pra por o O: '))
    return [linhaO, colunaO]
}

function verificarVitoria(letra) {
  if(tabuleiro[0][0] === letra && tabuleiro[0][1] === letra && tabuleiro[0][2] === letra) {
    jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}
  if(tabuleiro[1][0] === letra && tabuleiro[1][1] === letra && tabuleiro[1][2] === letra) {
    jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}
  if(tabuleiro[2][0] === letra && tabuleiro[2][1] === letra && tabuleiro[2][2] === letra) {
        jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}

  if(tabuleiro[0][0] === letra && tabuleiro[1][1] === letra && tabuleiro[2][2] === letra) {
    jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}
  if(tabuleiro[0][2] === letra && tabuleiro[1][1] === letra && tabuleiro[2][0] === letra) {
    jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}

  if(tabuleiro[0][0] === letra && tabuleiro[1][0] === letra && tabuleiro[2][0] === letra) {
        jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}
  if(tabuleiro[0][1] === letra && tabuleiro[1][1] === letra && tabuleiro[2][1] === letra) {
            jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}
  if(tabuleiro[0][2] === letra && tabuleiro[1][2] === letra && tabuleiro[2][2] === letra) {
                jogo = 1; console.log(`Letra ${letra} ganhou o jogo`)}
}

let jogo 



while(jogo!==1) {
  mostrarTabuleiro()
  let posicao = perguntaX()
  let linhaX = posicao[0]
  let colunaX = posicao[1] 
  tabuleiro[linhaX][colunaX] = 'X'

verificarVitoria('X')
  
  if(jogo !== 1) {
  mostrarTabuleiro()
  let posicaoO = perguntaO()
  let linhaO = posicaoO[0]
  let colunaO = posicaoO[1] 
  tabuleiro[linhaO][colunaO] = 'O'

verificarVitoria('O')
  }
}

console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')