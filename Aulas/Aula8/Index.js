/*
let palavra = 'Olá Mundo!'
let palavra2 = "Olá Mundo"
let palavra3 = `Olá Mundo`

console.log(palavra)
console.log(palavra2)
console.log(palavra3)
*/

/*
let nome = prompt("Qual seu nome?")
let cor = prompt("Qual sua cor favorita?")
console.log("A cor favorita de " + nome + " é " + cor)
console.log(`A cor favorita de ${nome} é ${cor}`)
*/

/*
const nome = 'VitorVitalinodaConceiçãodosReis'
console.log(nome.toLowerCase())
console.log(nome.length)
console.log(nome.toUpperCase())
*/

/*
const email = '      vitor.reisvc@gmail.com      '
emailSemEspacos = email.trim()
console.log(emailSemEspacos)
*/

/*
const frase = 'Ontem eu fiz carne com batata e molho'
console.log(frase.includes('carne'))
console.log(frase.toUpperCase().includes('BATATA'))

const fraseNova = frase.replaceAll('batata','cenoura')
console.log(fraseNova)

const fraseTeste = frase.replaceAll(' ','')
console.log(fraseTeste)
*/

/*
const fraseUsuario = prompt('Digite uma frase')

console.log(fraseUsuario.toUpperCase())
console.log(fraseUsuario.replaceAll('o','i'))
console.log(fraseUsuario.length)
console.log(fraseUsuario.toUpperCase().replaceAll('O', 'I'))
*/

// ARRAYS -- ARRAYS -- ARRAYS -- ARRAYS -- ARRAYS

/*
let racas = ['Pitbull', 'Rottweiler', 'Chihuahua', 'Great Dane', 'Labrador'];
alert(racas[Math.floor(Math.random() * 4)])
*/

/*
let pokemons = ['Pikachu', 'Bulbassauro', 'Genesect', 'Squirtle', 'Mewtwo'];
console.log(pokemons.length)
alert(pokemons[Math.floor(Math.random() * (pokemons.length))])
*/

/*
const seriesBoas = ['Vikings', 'The Big Bang Theory']

console.log(seriesBoas.includes('Vikings'))
console.log(seriesBoas.includes('Game of Thrones'))
*/

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros)

numeros.push(5, 6, 7, 8)
console.log(numeros)