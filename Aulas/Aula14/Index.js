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

let palavra = ['R','E','B','O','Q','U','E']
//console.log(palavra)
let palavraUser
let palavraFinal = ['_','_','_','_','_','_','_']
let tent = 10

while (tent !== palavra) {
  let resposta = prompt(`Digite a letra, sua palavra tem ${palavra.length} letras`).toUpperCase()
  // console.log("A letra digitada é: ", resposta)

  for (let i = 0; i < palavra.length; i++) {

    if (resposta === palavra[i]) {
      palavraFinal[i] = resposta
      console.log(palavraFinal)
    }
    tent--
  }
  
}
console.log('VOCÊ CONSEGUIU')
// let rep = palavra.replace(palavra[3], 'Z')
// console.log(rep)
// palavra