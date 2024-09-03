/* let resposta
let soma = 0

while(resposta !== 0) {
resposta = Number(prompt('Digite um número de 1 a 100: '))
soma = soma + resposta
}
console.log(soma)
*/

/*
let numero = 1

do {
  console.log(`Passo ${numero++}`)
} while(numero<=6)
*/

/*
let numeros = [1, 3, 5, 7, 9, 11]

for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}
*/

/*
let array = [10, 20, 30, 40, 50, 1005, 12, 27]
let numeroMaior = [null]
for(let i = 0; i < array.length ; i++) {
  if(array[i] > numeroMaior[0]) {
    numeroMaior[0] = array[i]
  }
}
console.log(numeroMaior[0])
*/

/*
let numeros = [11, 15, 12, 22, 46, 17, 21, 34]
let somaPares = 0

for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 === 0) {
    somaPares = somaPares + numeros[i]
  }
}
console.log(somaPares)
*/

/*
const numeros = [1, 4, 7, 3 , 12]

for(let numero of numeros) {
    console.log(numero)
}
*/

/*
const frase = ['Oi', 'sumido', 'tudo', 'bem?']

for(let palavra of frase) {
  console.log(palavra)
}
*/

/*
const numeros = [1, 5, 17, 44, 22, 12, 19, 22]
somaPares = 0

for(let par of numeros) {
  if(par%2===0) {
    somaPares += par
  }
}
console.log(somaPares)
*/

/*
let palavras = ['ovo', 'pneumonia', 'tigre', 'bala', 'brasão']
let maiorPalavra = ['']

for(let palavra of palavras) {
  if(palavra.length > maiorPalavra[0].length) {
    maiorPalavra[0] = palavra
  }
}
console.log(maiorPalavra)
*/