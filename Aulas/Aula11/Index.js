// Exercícios de Fixação

/*
1. Teste de números

a. Ele testa se os números são pares ou ímpares
b. Ele imprime se o número colocado for um número par
c. A mensagem no Else é impressa quando o número for ímpar

2. Mercado

a. O código serve para descobrir o valor das frutas
b. "O preço da fruta Maçã é R$2.25"
c. A mensagem impressa seria "O preço da fruta Pêra é R$5"

3. Mensagem Secreta 

a. Pedindo pro usuário digitar um número
b. Se o usuário digitar 10 será impresso "Essa mensagem é secreta!!!"; Se for -10 vai dar erro
c. Haverá um erro pelo fato da variável mensagem só existir dentro do escopo do IF
*/

/*
// 4. Exercício de escrita

let idade = Number(prompt('Você tem 18 anos ou mais?'))

if(idade >= 18) {
  console.log('Você pode dirigir')
} else {
  console.log('Você não pode dirigir')
}
*/

/*
// 5.

let turno = (prompt('Você estuda em qual turno? Manhã, tarde ou noite')).toLowerCase()

if(turno === 'manhã'||turno === 'manha') {
  console.log('Tenha um bom dia')
} else if(turno === 'tarde') {
  console.log('Tenha uma boa tarde ')
} else if(turno === 'noite') {
  console.log('Tenha uma boa noite')
}
*/

/*
// 6.

let turno = (prompt('Você estuda em qual turno? Manhã, tarde ou noite')).toLowerCase()

switch(turno) {
  case 'manha'||'manhã': 
  console.log('Tenha um bom dia')
  break
  
  case 'tarde':
  console.log('Tenha uma boa tarde')
  break

  case 'noite':
  console.log('Tenha uma boa noite')
  break
}
*/

/*
// 7.
let genero = prompt('Qual o gênero do filme?').toLowerCase()
let preco = Number(prompt('Qual o valor do ingresso?'))

if(genero === 'fantasia' && preco<=15) {
  console.log('Bom Filme')
} else {
  console.log('Escolha outro filme :-(')
}
*/

// 8.

/*
let genero = prompt('Qual o gênero do filme?').toLowerCase()
let preco = Number(prompt('Qual o valor do ingresso?'))

if(genero === 'fantasia' && preco<=15) {
  let lanchinhos = prompt('Quais lanches você vai querer?')
  console.log(`Bom filme e aproveite seu(s) lanche(s) ${lanchinhos.toLowerCase()}`)
} else {
  console.log('Escolha outro filme :-(')
}*/



// 9. 

let nome = prompt('Qual seu nome completo?').toUpperCase()
let tipoJogo = prompt('Qual tipo de jogo você vai assistir? IN - Internacional / DO - Doméstico').toUpperCase()
let etapaJogo = prompt('Qual etapa do jogo? SF - Semi-final / DT - Terceiro Lugar / FI - Final').toUpperCase()
let categoria = Number(prompt('Qual a categoria? 1, 2, 3 ou 4'))
let quantidade = Number(prompt('Quantos ingressos você quer comprar?'))
let valor

switch(categoria) {
  case 1:
    if(etapaJogo === 'SF') {valor = 1320}
    if(etapaJogo === 'DT') {valor = 660}
    if(etapaJogo === 'FI') {valor = 1980}
    break

  case 2:
    if(etapaJogo === 'SF') {valor = 880}
    if(etapaJogo === 'DT') {valor = 440}
    if(etapaJogo === 'FI') {valor = 1320}
    break

  case 3:
    if(etapaJogo === 'SF') {valor = 550}
    if(etapaJogo === 'DT') {valor = 330}
    if(etapaJogo === 'FI') {valor = 880}
    break

  case 4:
    if(etapaJogo === 'SF') {valor = 220}
    if(etapaJogo === 'DT') {valor = 170}
    if(etapaJogo === 'FI') {valor = 330}
    break
}

if(tipoJogo==='IN') {
  valor *= 5.65
}

let valorTotal = valor * quantidade

console.log("Nome:", nome)
console.log("Tipo do jogo:", tipoJogo)
console.log("Etapa do jogo:", etapaJogo)
console.log("Categoria:", categoria)
console.log('Valor do Ingresso:', valor.toFixed(2))
console.log("Quantidade:", quantidade)
console.log("Valor total:", valorTotal.toFixed(2))


/*
const comedia = 10
const acao = 20
const drama = 18
const animacao = 15

let comedy = prompt('Querem assistir comédia?')
let comedy2 = prompt(`O filme de comédia é R$${comedia}, querem assistir?`)

if(comedy === 'não' || comedy2 === 'não') {
  console.log('Outro filme')
} else {
  console.log('Bom filme')
}
  */