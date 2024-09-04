// Exercícios de fixação

/*
1. Ele tá acrescentando o valor de I na variável valor. Será impresso número 10

2. Será impresso no console todos os valores menores que 18. Pra pegar o índice do elemento, precisamos iterar a uma nova variável iniciada em -1, pra começar a contar a partir do índice 0.
*/
/*
const numeros = [1, 7, 4, 12, 15, 17]
let i = -1
for(let numero of numeros) {
  i++
  console.log(`Elemento ${numero} no índice ${i}`)
}
*/

/* 

3. Se eu digitasse 4, seria impresso quatro linhas com asteriscos

const quantidadeTotal = Number(prompt('Digite um número'))
let quantidadeAtual = 0

while(quantidadeAtual < quantidadeTotal) {
  let linha = ""

  for(let asterisco = 0; asterisco < quantidadeAtual +1; asterisco++) {
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

// Exercícios de escrita

/*
let bichinhos = Number(prompt('Quantos animais de estimação você tem?'))
let lista = []

if(bichinhos === 0) {
  console.log('Que pena! Você poderia adotar um bichinho')
}

if(bichinhos > 0) {
for(let i = 0; i < bichinhos; i++) {
let pergunta = prompt('Qual o nome dos seus bichinhos? Um por um.')
lista[i] = pergunta
}
}

if(lista.length > 0) {
  for(let bicho of lista) {
    console.log(bicho)
  }
}
*/

/*
let arrayOriginal = [47, 48, 93, 41, 12, 521, 99]
let maior = [arrayOriginal[0]]
let menor = [arrayOriginal[0]]


for(let numero of arrayOriginal) {
  console.log(numero)
 console.log(numero / 10)
}

for(let numero of arrayOriginal) {
  if(numero%2===0) {
    console.log(numero)
  }
}
let array = []
for(let i = 0; i < arrayOriginal.length; i++) {
  array[i] = `O elemento do índice ${i} é ${arrayOriginal[i]}`
}
console.log(array)


for(let numero of arrayOriginal) {
if(numero > maior) {
  maior[0] = numero
}

if(numero < menor) {
  menor[0] = numero
}
}
console.log(maior[0], menor[0])
*/

/*

const bichos = Number(prompt('Quantos bichos'))
let nome
let nomes = []

if(bichos > 0) {
for(let i = 0; i < bichos; i++) {
  nome = prompt('Qual o nome deles')
  nomes[i] = nome
}
}

if(bichos === 0) {
  console.log('Que pena')
}
console.log(nome)
*/

/*
console.log('VAMOS JOGAR')

const resposta = Math.floor(Math.random()*100)+1
pergunta = Number(prompt('Adivinhe o número de 1 a 100'))
let tentativas = 1
while(pergunta !== resposta) {
  if(pergunta > resposta) {
    pergunta = Number(prompt('ERROU, O NÚMERO É MENOR'))
    tentativas++
  } else {
    pergunta = Number(prompt(('ERROU, O NÚMERO É MAIOR')))
    tentativas++
  }
}

alert('PARABÉNS, VOCÊ ACERTOU')
console.log(`O número de tentativas foi ${tentativas}`)
*/

/*
console.log('VAMOS JOGAR')

const resposta = 55
pergunta = Number(prompt('Adivinhe o número de 1 a 100'))
let tentativas = 1
console.log(`O número chutado foi: ${pergunta}`)
while(pergunta !== resposta) {
  if(pergunta > resposta) {
    pergunta = Number(prompt('ERROU, O NÚMERO É MENOR'))
    tentativas++
    console.log(`O número chutado foi: ${pergunta}`)
  } else {
    pergunta = Number(prompt(('ERROU, O NÚMERO É MAIOR')))
    tentativas++
    console.log(`O número chutado foi: ${pergunta}`)
  }
}

alert('PARABÉNS, VOCÊ ACERTOU')
console.log(`O número de tentativas foi ${tentativas}`)
*/

let jogo = alert('Você começou o jogo, siga em frente para 1ª rodada')

let vida = 1
let recursos = 0

let caminho1 = alert(`Você começa com:  ${vida} de vida e ${recursos} recursos`)


console.log(arrayOriginal[3])