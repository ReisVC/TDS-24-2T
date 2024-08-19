// COMPARADORES

let valor1 = 'VITOR      '
let valor2 = 'vitor'

console.log(`${(valor1.toLowerCase()).trim() === valor2} \n \n`)

/*
//comparação de valor
const condicao = 1 === 1 //Resultado true
console.log(condicao)

//comparação de valor e tipo igual
const condicao2 = 1 === '1' //Resultado false
console.log(condicao2)
*/

/*
const condicao = 1 !== '1'
console.log(condicao) //Resultado true
const condicao2 = 1 !== 1
console.log(condicao2) //Resultado false
const condicao3 = 2 !== 1
console.log(condicao3) //Resultado true
*/

// Comparador Maior & Maior e Igual

/*
const condicao = 1 > 2
console.log(condicao)
const condicao2 = 2 > 2
console.log(condicao2)
const condicao3 = 2 >= 2
console.log(condicao3)
const condicao4 = 3 > 2
console.log(condicao4)
*/

/*
const condicao = 1 < 2
console.log(condicao) //Resultado true
const condicao2 = 2 < 2
console.log(condicao2) //Resultado false
const condicao3 = 2 <= 2
console.log(condicao3) //Resultado true
const condicao4 = 3 < 2
console.log(condicao4) //Resultado false
*/

const num1 = 12
const num2 = 20

console.log(num1 === num2) // false
console.log(num1 !== num2) // true
console.log(num1 > num2) // false
console.log(num1 < num2) // true
