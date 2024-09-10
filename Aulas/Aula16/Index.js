/*let array = [peleGelada=false,
transformaLuaCheia=true,
brilhaAoSol=false,
sedeDeSangue=true,
pelos=true
]

console.log(array)

function determinaMonstro(array){
  if(array[0] && array[3]) {
    return 'Vampiro'
  }
  if(array[1] && [4]) {
    return 'Lobisomem'
  }

  if(array[2] && !array[0]) {
    return 'Humano'
  }
}
 
console.log(determinaMonstro(array))
*/

// Exercícios de fixação

/*
1. 
a) Vai ser impresso 10 e 50
b) Não apareceria nada, a função só retornaria um número

2.
a) A funçao retorna se a palavra "cenoura" está na frase do usuário
b) Retornará respectivamente true, true e false

*/

/*
let mensagemUser = ()=>{console.log('Eu sou Vitor, tenho 21 anos, moro em São Leopoldo e estudo no SenacRS')}

let soma = (num1,num2)=>{return num1+num2}
let numeroMaior = (num1, num2)=>{return num1 >= num2}
let numeroPar = (num)=>{if(num%2===0){return true} else{return false}}
let mensagem = (text)=>{console.log(text.length); console.log(text.toUpperCase())}

console.log(soma(17, 29))
console.log(numeroMaior(17,15))
console.log(numeroPar(14235256))
mensagem('Meu nome é Yoshikage Kira. Tenho 33 anos. Minha casa fica na parte nordeste de Morioh, onde todas as casas estão, e eu não sou casado. Eu trabalho como funcionário das lojas de departamentos Kame Yu e chego em casa todos os dias às oito da noite, no máximo. Eu não fumo, mas ocasionalmente bebo. Estou na cama às 23 horas e me certifico de ter oito horas de sono, não importa o que aconteça.')
*/

/*
let operacoes = (num1, num2)=> {
  console.log(`Os números escolhidos são ${num1} e ${num2}`)
  console.log(`Soma: ${num1 + num2} \nDiferença: ${num1 - num2} \nMultiplicação: ${num1*num2} \nDivisão: ${num1/num2}`)
}

operacoes(30,3)   
operacoes(100, 25)
*/

/*
let numero = (num1)=>{console.log(num1)}
let soma = (num1, num2) => {numero(num1+num2)}

soma(100, 400)
*/

let adicionarItem = (inventario) => {
  let condicao = true
  while(condicao) {
  item = prompt('Escreva um item para adicionar').toUpperCase()
  inventario.push(item)

  let pergunta = prompt('Você deseja parar?')
  if(pergunta.toLowerCase()=== 'sim') {
    condicao = false
  }
  }
}

let listarItens = (inventario) => {
  alert(`Seus itens são: ${inventario}`)
}

let removerItem = (item, inventario) => {
  const index = inventario.indexOf(item)
  inventario.splice(index,1)
}


let inventario = []
let user 
while(user !== 0) {
  user = Number(prompt(`[1] Adicionar Item \n[2] Listar Itens \n[3] Excluir Item`))

  if(user===1) {
    adicionarItem(inventario)
  }

  if(user===2) {
    listarItens(inventario)
  }

  if(user===3) {
    removerItem(remover, inventario)
  }
}

