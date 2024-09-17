// Exercícios de Fixação 

/*

1. a. Será impresso: 
Matheus Natchergaele
Virginia Cavendish 
Objeto{canal: "Globo", horario: "14h"}

2. a. Será impresso:
Objeto{nome: "Juca", idade: 3, raca: "SRD"}
Objeto{nome: "Juba", idade: 3, raca: "SRD"}
Objeto{nome: "Jubo", idade: 3, raca: "SRD"}

b. A sintaxe de 3 pontos facilita a cópia do objeto.


3. a. Será impresso:
false
undefined

b. Retorna o valor da propriedade pois estamos pesquisando pelo nome da propriedade, e retornou undefined porque a propriedade altura não existe.

*/

/*
let pessoa = {
  nome: "Vitor",
  apelido: ['Vitinho', 'Vitto Corleone', 'Vitão da Massa']
}

function retornaApelido(objeto) {
  return `Eu sou ${objeto.nome} e meus apelidos são: ${objeto.apelido}`
}

console.log(retornaApelido(pessoa))

const novaPessoa = {
  ...pessoa,
  apelido: ['Vitão', 'Tito', 'Alemão']
}

console.log(retornaApelido(novaPessoa))
*/

/*
const pessoa1 = {
  nome: 'Vitor',
  idade: 21,
  profissão: 'Chapeiro'
}

const pessoa2 = {
  nome: 'Luut',
  idade: 30,
  profissão: 'Fotógrafo'
}

const retornaInfo = (objeto) => {
  let info = []
  info.push(objeto.nome)
  info.push(objeto.nome.length)
  info.push(objeto.idade)
  info.push(objeto.profissão)
  info.push(objeto.profissão.length)
  return info
}

console.log(retornaInfo(pessoa1))
console.log(retornaInfo(pessoa2))
*/

/*
const carrinho = []

const banana = {
  nome: 'Banana',
  disponibilidade: true
}
const maca = {
  nome: 'Maçã',
  disponibilidade: true
}
const pera = {
  nome: 'Pêra',
  disponibilidade: true
}

const preencheCarrinho = (fruta) => {
carrinho.push(fruta)
}

preencheCarrinho(banana)
preencheCarrinho(pera)
preencheCarrinho(maca)
console.log(carrinho)
*/

/*
const infos = () => {
  let nome = prompt('Qual seu nome?')
  let idade = prompt('Qual sua idade?')
  let profissao = prompt('Qual sua profissão?')
  return [nome, idade, profissao]
}

let array = infos()

const pessoa = {
  nome: array[0],
  idade: array[1],
  profissao: array[2]
}

console.log(pessoa)
console.log(typeof(pessoa))
*/

/*
const ateHomem = {
  nome: 'Até O Último Homem',
  ano: 2016
}

const lagoaAzul = {
  nome: 'Lagoa Azul',
  ano: 1980
}

const retornaAno = (filme1, filme2) => {
  let maior = filme1.ano < filme2.ano
  let igual = filme1.ano === filme2.ano
  return `O primeiro filme foi lançado antes que o segundo? ${maior} \nO primeiro filme foi lançado ao mesmo tempo que o segundo? ${igual}`
}

console.log(retornaAno(lagoaAzul, ateHomem))
*/

/*
const carrinho = []

const banana = {
  nome: 'Banana',
  disponibilidade: true
}
const maca = {
  nome: 'Maçã',
  disponibilidade: true
}
const pera = {
  nome: 'Pêra',
  disponibilidade: true
}

const retornaDisp = (fruta) => {
  fruta.disponibilidade = !(fruta.disponibilidade)
  return fruta
}

console.log(retornaDisp(banana))
console.log(retornaDisp(pera))
console.log(retornaDisp(maca))
*/

const negrinho = {
  nome: 'Negrinho do Pastoreio',
  tipo: 'Personagem',
  ano: 1850,
  descricao: 'Segundo a lenda, ainda no tempo da escravidão, o Negrinho foi um pequeno escravo que sofreu muito nas mãos de um fazendeiro.',
  regiao: 'RS',
  saudar: () => {
    return `Negrinho do pastoreio, Acendo esta vela pra ti. E peço que me devolvas, A querência que perdi.`
  }
}

const sereia = {
  nome: 'Sereia da Furna do Diamante',
  tipo: 'Personagem',
  ano: 1900,
  descricao: 'A sereia protege a Furna do Diamante e guarda nela um esconderijo secreto, repleto de pedras preciosas e diamantes. Toda sexta-feira, em noites de lua cheia, ela aparece na porta da gruta e, certamente, pedirá um pente para quem encontrar – para poder pentear seus longos e belos cabelos.',
  regiao: 'Torres', 
  saudar: () => {
    return `Eu também sou Sereia e peço os seus dedos para passar entre os meus cabelos.`
  }
}

const sepe = {
  nome: 'Sepé Tiaraju',
  tipo: 'Personagem',
  ano: 1756,
  descricao: 'A lenda de Sepé Tiaraju diz que ele era filho de um cacique, possuía vigoroso porte físico e era um valente guerreiro.',
  regiao: 'Misiones Orientales',
  saudar: () => {
    return `Esta terra tem dono, e ninguém no-la tira`
  }
}

let personagens = [negrinho, sereia, sepe]

const retornaSaudacao = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i].saudar())
  }
}

retornaSaudacao(personagens)
