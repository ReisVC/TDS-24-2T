/*
let lista = [1,2,3,4, 
    [1,2,3,4,5]]

lista.splice(3,2)
console.log(lista)
*/

/*
let array 
console.log('a.  ', array) // Imprime Undefined

array = null
console.log('b.  ', array) // Imprime valor Null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c.  ', array.length) // Imprime 11

let i = 0
console.log('d.  ', array[i]) // Imprime 3

array[i+1] = 19
console.log('e.  ', array) // Imprime [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f.  ', valor) // Imprime 9
*/

/*
const frase = prompt('Digite uma frase')
console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length) 
// Se a frase for "Socorram-me subi no ônibus em Marrocos", será impresso "SOCORRIM-ME SUBI NO ÔNIBUS EM MIRROCOS 38" 
*/

/*
let nomeUser = prompt("Qual seu nome?")
let emailUser = prompt("Qual seu email?")

console.log(`O email ${emailUser} foi cadastrado com sucesso. Seja bem-vindo, ${nomeUser}`)
*/

/*
let comida = ['Vaca Atolada', 'Carne com Batata', 'Massa com molho', 'Sopa', 'Bife Parmegiana']
console.log(`Minhas comidas favoritas são: 
${comida[0]} 
${comida[1]} 
${comida[2]} 
${comida[3]} 
${comida[4]}`)

comida[1] = prompt('Qual sua comida favorita?')
console.log(`Minhas comidas favoritas são: 
${comida[0]} 
${comida[1]} 
${comida[2]} 
${comida[3]} 
${comida[4]}`)
*/

let listaTarefas = []

listaTarefas[0] = prompt('Cite uma tarefa para lista')
listaTarefas[1] = prompt('Cite outra tarefa')
listaTarefas[2] = prompt('Mais uma tarefa')
console.log(listaTarefas)

const index = listaTarefas.indexOf(prompt('Qual tarefa você já realizou?')) 
if (index > -1) {
  listaTarefas.splice(index, 1);
}