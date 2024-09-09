/* function calcularArea(a, l) {
  return a * l
}

console.log(calcularArea(10, 5))
console.log(calcularArea(30, 2))
console.log(calcularArea(25, 30))
console.log(calcularArea(20, 10))
*/

/*
function imprimirOlaMundo() {
  console.log("Hello World")
}

imprimirOlaMundo()
*/

/*
function imprimirNome (nome) {
  console.log(`Bem vindo ${nome}`)
}

imprimirNome('Vitor Vitalino')
*/

/*
function imprimeTurma(turma) {
  console.log(`Bem vindo ${turma}!!`)
}

function somaNumeros(a, b) {
  let soma = a + b
  console.log(`A soma é: ${soma}`)
}

function dobraNumero(num1) {
  let dobro = num1 * 2
  console.log(`O dobro do número ${num1} é ${dobro}`)
}

imprimeTurma('Turma 24-2T')
somaNumeros(4, 5)
dobraNumero(35)
*/

/*
function chamaNome(nome) {
  console.log(`Olá ${nome}`)
}

chamaNome('Vitor')
chamaNome('Luut')
chamaNome('Vitória')

function somaNum(num1, num2) {
  console.log(`A soma dos números é ${num1 + num2}`)
}

somaNum(300, 500)
*/

/*
let nomeUser = prompt('Olá, qual o seu nome?')

function perguntaFacul(nome) {
  const facul = prompt(`Olá ${nome}, soube que você faz faculdade, qual faculdade você faz?`)
  const local = prompt(`Certo ${nome}, onde você faz faculdade?`)
  console.log(`A ${nome} faz faculdade de ${facul.toLowerCase()} na universidade ${local}. Meus parabéns pela sua conquista e que continue sempre evoluindo mais e mais como pessoa.`)
}

perguntaFacul(nomeUser)
*/

/*
function soma(num1, num2) {
  return num1 + num2
}
console.log(soma(4112, 2341))


function calcularArea(altura, largura) {
  const area = largura * altura
  return area
}
console.log(`A área é ${calcularArea(30, 20)}`)
*/

/*
function somaNum(num1, num2) {
  let soma = num1 + num2
  return soma
}

console.log(somaNum(30, 69))

let lista = [24, 54, 65, 28, 80, 236, 24]

function numArray(numeros) {
  let newArray = []
  newArray.push(numeros[0]/2)
  newArray.push(numeros[numeros.length-1]/2)
  return newArray
}

console.log(numArray(lista))
*/

/*
const calculaArea = function(largura, altura) {
  const soma = largura * altura
  return soma
}

const resultado = calculaArea(10, 25)
console.log(resultado)
*/

/*
const calcularArea = (height, width) => {
  const resultado = height * width
  return resultado
}

console.log(calcularArea(204, 3124))

let area=(a,b)=>a!==b?'verdadeiro':'falso'
console.log(area(2,2))
*/

/*
let soma=(num1, num2)=>{return num1+num2}
console.log(soma(15,2))

let dobro=(num1)=>{return `O dobro de ${num1} é ${num1*2}`}
console.log(dobro(4))
*/

let peleGelada = false
let transformaLuaCheia = true
let brilhaAoSol = false
let sedeDeSangue = true
let pelos = true

function determinaMonstro(peleGelada, transformaLuaCheia, brilhaAoSol, sedeDeSangue, pelos){
  if(peleGelada && sedeDeSangue) {
    return 'Vampiro'
  }
  if(transformaLuaCheia && pelos) {
    return 'Lobisomem'
  }

  if(brilhaAoSol && !peleGelada) {
    return 'Humano'
  }
}
 
console.log(determinaMonstro(peleGelada, transformaLuaCheia, brilhaAoSol, sedeDeSangue, pelos))