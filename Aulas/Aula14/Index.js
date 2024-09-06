/*
for(let i = 1; i <= 10; i++) {
  console.log(i)
}
*/

/*
for(let i = 0; i <= 20; i++) 
{
  if(i%2===0) {
    console.log(i)
  }
}
*/

/*
let tabuada = Number(prompt('Digite um número pra saber sua tabuada'))

for(let i = 1; i <= 10; i++) {
  console.log(tabuada * i)
}
*/

/*
let cont = 1
let soma = 0
while(cont <= 5) {
  let user = Number(prompt(`Insira o ${cont}º para fazer a soma`))
  cont++
  soma += user
}
alert(soma)
*/

/*
cont = 1
let media = 0
while(cont <= 5) {
  calcularMedia = Number(prompt(`Coloque a ${cont}ª nota para fazer a média.`))
  media += calcularMedia
  cont++
}

alert(`A média das notas é: ${(media/(cont-1)).toFixed(2)}`)
*/

function checkArrays(a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2); // Função para verificar as arrays
}

const lista = ['REBOQUE', 'PIADA', 'TRABALHO', 'FREIRA', 'PARANORMAL', 'FENOMENO', 'COLEGA', 'SONHADOR', 'PORTUGAL', 'PODER', 'REVERSO', 'PALAVRA', 'PINTOR', 'COMEDIANTE']
let sub = '_'

let esc = Math.floor(Math.random()*((lista.length))) // Gerador de número aleatório

let palavra = []
let palavraFinal = []

for(let letra of lista[esc]) { // Converte a string para elementos de array
  palavra.push(letra)
}

while(palavraFinal.length <lista[esc].length) {  // Adiciona '_' a partir da quantidade de letras
  palavraFinal.push(sub)
}

console.log(palavraFinal)

let tent = palavra.length + 3 // Adiciona 3 chances para erros

while (tent !== 0 && !(checkArrays(palavra, palavraFinal))) {
  tent -= 1
  let resposta = prompt(`Digite a letra, sua palavra tem ${palavra.length} letras`).toUpperCase()

  for (let i = 0; i < palavra.length; i++) {
    if (resposta === palavra[i]) {
      palavraFinal[i] = resposta // Substitui o '_" pela letra correta
      console.log(palavraFinal)
    }
  }
}

if(checkArrays(palavra, palavraFinal)) { 
  console.log('VOCÊ CONSEGUIU')
} else {
  console.log('VOCÊ PERDEU, TENTE NOVAMENTE')
}
