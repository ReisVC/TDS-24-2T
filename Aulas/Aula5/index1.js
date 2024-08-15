let nome = ''
let idade 

console.log(typeof nome)
console.log(typeof idade)

// A variável nome foi impressa como string porque foi declarada como string, já idade foi impressa como undefined porque foi apenas declarada

nome = prompt('Qual seu nome?')
idade = Number(prompt('Qual sua idade?'))

console.log(typeof nome, typeof idade) // Nome foi declarado ainda como string, e idade passa a ser declarada como number

console.log(`Olá ${nome}, você tem ${idade} anos de idade.`)