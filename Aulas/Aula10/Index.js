/*let condicao1 = true

if(condicao1) {
  console.log("Exibiu condicão1")
}

let condicao2 = false

if(!condicao2) {
  console.log("Exibiu condicao2")
}
*/

/*
let num1 = Number(prompt('Digite o primeiro número:'))
let num2 = Number(prompt('Digite o segundo número:'))

if(num1 === num2) {
  console.log('Os números são iguais')
} else {
  console.log('Os numeros são diferentes')
}
*/

/*
let condicao = false

if(condicao) {
  console.log('Entrou no If')
} else {
  console.log('Entrou no Else')
}
*/

/*
num1 = Number(prompt('Digite um número'))
num2 = Number(prompt('Digite outro número'))

if(num1 === num2) {
  console.log('Os números são iguais')
} else {
  console.log('Os números são diferentes')
}
*/

/*
condicao1 = false
condicao2 = false

if(condicao1) {
  console.log('Condição 1 é verdadeira')
} else if(condicao2) {
  console.log('Condição 2 é verdadeira')
} else {
  console.log('Entrou no Else')
}
*/


/*
const num1 = Number(prompt('Digite um número'))
const num2 = Number(prompt('Digite outro número'))

if(num1 > num2) {
  console.log('Primeiro número é maior que o segundo')
} else if(num1 === num2) {
  console.log('Os dois números são iguais')
} else {
  console.log('Segundo número é maior que o primeiro')
}
*/      

/*
let esc = (prompt('Qual seu país de origem')).toLowerCase().trim()

switch(esc) {
  case 'brasil':
    console.log('Você é brasileiro!')
    break
  case 'inglaterra':
    console.log('Você é britânico!')
    break
  case 'eua':
    console.log('Você é americano!')
    break
  case 'méxico':
    console.log('Você é mexicano!')
    break
  default:
    console.log('Nacionalidade não encontrada!')
    break
}
*/

/*
let pokemon = prompt('Escolha um pokemon')

switch(pokemon.toLowerCase().trim()) {
  case 'bulbasauro':
  console.log('Pokemon do tipo Planta e Veneno')
  break

  case 'charmander':
  console.log('Pokemon do tipo Fogo')
  break

  case 'Squirtle':
  console.log('Pokemon do tipo Água')
  break

  case 'genesect':
  console.log('Pokemon do tipo Inseto e Ferro')
  break
}
*/

/*
let personagem = prompt('Escolha um personagem de Harry Potter')

switch(personagem.toLowerCase().trim()) {
  case 'hermione':
  console.log('Você escolheu a Hermione da casa Grifinória')
  break

  case 'ana':
  console.log('Você escolheu a Hermione da casa Lufa-Lufa')
  break

  case 'luna':
  console.log('Você escolheu a Hermione da casa Corvinal')
  break

  case 'narcisa':
  console.log('Você escolheu a Hermione da casa Sonserina')
  break
}
*/

/*
let condicao1 = false
let condicao2 = false

if(condicao1 || condicao2) {
  console.log('Alguma das condições é verdadeira')
} else {
  console.log('Todas são falsas')
}

if(!condicao1) {
  console.log('A condição 1 é falsa')
} else {
  console.log('A condição 1 é verdadeira')
} 
*/

/*
let maiorIdade = prompt("Você tem mais de 18 anos?")

let ensMedio = prompt("Você terminou o Ensino Médio?")

let outraFacul = prompt("Você faz faculdade em outro lugar?")

if(maiorIdade === 'Sim' && ensMedio === 'Sim' && outraFacul === 'Não') {
  console.log("Você pode estudar na nossa faculdade")
  } else { 
  console.log("Você não pode estudar na nossa faculdade")
  }
*/


let choose = Math.floor(Math.random()*5)
// console.log(choose)

let jokenpo = prompt('Escolha entre Pedra, Papel, Tesoura, Lagarto ou Spock')
console.log(`Você escolheu ${jokenpo}`)

switch (choose) {
  case 0:
    console.log('Seu inimigo escolheu Tesoura')
    break

  case 1: 
    console.log('Seu inimigo escolheu Papel')
    break

  case 2:
    console.log('Seu inimigo escolheu Pedra')
    break

  case 3:
    console.log('Seu inimigo escolheu Lagarto')
    break

  case 4: 
  console.log('Seu inimigo escolheu Spock')
  break
}

if(jokenpo.toLowerCase() === 'pedra' && choose===0) {
  console.log('Pedra amassa Tesoura, você ganhou!!')
} else if(jokenpo.toLowerCase() === 'pedra' && choose===1) {
  console.log('Papel enrola Pedra, você perdeu!!')
} else if(jokenpo.toLowerCase()=== 'pedra' && choose===2) {
  console.log('Pedra empata com pedra, vocês empataram!!')
} else if(jokenpo.toLowerCase() === 'pedra' && choose===3) {
  console.log('Pedra esmaga lagarto, você ganhou!')
} else if (jokenpo.toLowerCase() ==='pedra' && choose===4) {
  console.log('Spock vaporiza pedra, você perdeu!')
}

if(jokenpo.toLowerCase() === 'tesoura' && choose===0) {
  console.log('Tesoura não corta tesoura, vocês empataram!!')
} else if(jokenpo.toLowerCase() === 'tesoura' && choose===1) {
  console.log('Tesoura corta papel, você ganhou!!')
} else if(jokenpo.toLowerCase()=== 'tesoura' && choose===2) {
  console.log('Pedra amassa tesoura, você perdeu!!')
} else if(jokenpo.toLowerCase()=== 'tesoura' && choose===3) {
  console.log('Tesoura decapita lagarto, você ganhou!')
} else if(jokenpo.toLowerCase() === 'tesoura' && choose===4) {
  console.log('Spock derrete tesoura, você perdeu!')
}

if(jokenpo.toLowerCase() === 'papel' && choose===0) {
  console.log('Tesoura corta papel, você perdeu!!')
} else if(jokenpo.toLowerCase() === 'papel' && choose===1) {
  console.log('Papel não enrola papel, vocês empataram!!')
} else if(jokenpo.toLowerCase()=== 'papel' && choose===2) {
  console.log('Papel enrola pedra, você ganhou!!')
} else if(jokenpo.toLowerCase()=== 'papel'&&choose===3) {
  console.log('Lagarto come papel, você perdeu!')
} else if(jokenpo.toLowerCase()==='papel'&& choose===4) {
  console.log('Papel refuta Spock, você ganhou!')
}
  
if(jokenpo.toLowerCase() === 'lagarto' && choose===0) {
  console.log('Tesoura decapita lagarto, você perdeu!!')
} else if(jokenpo.toLowerCase() === 'lagarto' && choose===1) {
  console.log('Lagarto come papel, você ganhou!!')
} else if(jokenpo.toLowerCase()=== 'lagarto' && choose===2) {
  console.log('Pedra esmaga lagarto, você perdeu!!')
} else if(jokenpo.toLowerCase()=== 'lagarto'&&choose===3) {
  console.log('Lagarto não ganha de lagarto, vocês empataram!')
} else if(jokenpo.toLowerCase()==='lagarto'&& choose===4) {
  console.log('Lagarto envenena Spock, você ganhou!')
}

if(jokenpo.toLowerCase() === 'spock' && choose===0) {
  console.log('Spock derrete tesoura, você ganhou!!')
} else if(jokenpo.toLowerCase() === 'spock' && choose===1) {
  console.log('Papel refuta Spock, você perdeu!!')
} else if(jokenpo.toLowerCase()=== 'spock' && choose===2) {
  console.log('Spock vaporiza pedra, você ganhou!!')
} else if(jokenpo.toLowerCase()=== 'spock' && choose===3) {
  console.log('Lagarto envenena Spock, você perdeu!')
} else if(jokenpo.toLowerCase() === 'spock' && choose===4) {
  console.log('Spock argumenta com Spock, vocês empataram!')
}