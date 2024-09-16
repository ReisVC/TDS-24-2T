/* const pessoa = {
  nome: 'Vitor',
  idade: 21,
  altura: 1.70,
  email: 'vitor.reisvc@gmail.com',
  tarefas: ['Ir pra aula', 'Fazer perguntas'],
  contarPiada() {
    console.log('É pra vê ou pã cumê?')
  }
}

pessoa.contarPiada()  
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.altura)
console.log(pessoa["email"])


pessoa.nome = 'Vitor Reis'
console.log(pessoa.nome)
pessoa.email = 'vitor050203@gmail.com'
console.log(pessoa.email)
*/

/*
const filme = {
  nome: 'Até O Último Homem',
  ano: 2016,
  direcao: 'Mel Gibson',
  elenco: ['Andrew Garfield', 'Luke Bracey', 'Vince Vaughn', 'Teresa Palmer', 'Sam Worthington'],
  assistido: true,
  avaliacao: 8.1
}

console.log(filme.nome)
console.log(filme.ano)
*/

/*
const pessoa = {
  nome: 'Vitória',
  idade: 20,
  genero: 'músicas nos anos 80'
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.genero}`)
*/

/*
const donoDoPet = {
  nome: 'Vitor',
  idade: 21,
  pet: {
    nome: 'Panda',
    raca: 'Pug',
    idade: 3
  }
}

console.log(donoDoPet.pet.nome)
console.log(donoDoPet.pet.raca)
console.log(donoDoPet.pet.idade)
*/

/*
const curso = {
  nome: 'Front End Noturno', 
  linguagens: ['JS', 'CSS', 'HTML']
}
console.log(curso.linguagens[0])
*/

/*
const professores = [
  {nome: "Lucas", idade: 32, modulo: 1},
  {nome: "Léo", idade: 29,modulo: 2},
  {nome: "Mika", idade: 29, modulo: 3}
]

console.log(professores[0].nome)
console.log(professores[0].idade)
console.log(professores[0].modulo)
*/

/*
const curso = {
  nome: 'Front End Noturno', 
  linguagens: ['JS', 'CSS', 'HTML']
}

curso.numeroEstudantes = 30
curso['numeroProfessores'] = 10

console.log(curso.numeroEstudantes)
console.log(curso.numeroProfessores)
*/

/*
const filme = {
  nome: 'Até O Último Homem',
  ano: 2016,
  direcao: 'Mel Gibson',
  elenco: ['Andrew Garfield', 'Luke Bracey', 'Vince Vaughn', 'Teresa Palmer', 'Sam Worthington'],
  assistido: true,
  avaliacao: 8.1
}

filme.personagens = ['Desmond Doss', 'Smitty Ryker', 'Sergeant Howell', 'Dorothy Schutte', 'Captain Glover']

console.log(`Os personagens são: ${filme.personagens[0]} (${filme.elenco[0]}), ${filme.personagens[1]} (${filme.elenco[1]}), ${filme.personagens[2]} (${filme.elenco[2]}), ${filme.personagens[3]} (${filme.elenco[3]}), ${filme.personagens[4]} (${filme.elenco[4]})`)

filme.elenco[0] = 'XUXA mãe da SHASHA'

console.log(filme)
*/

/*
const usuario = {
  nome: 'Victor',
  idade: 20,
  email: 'vitor.reisvc@gmail.com',
  cidade: 'São Leopoldo'
}

const novoUsuario = {
  ...usuario,
  nome: 'Vitor',
  idade: 21
}
console.log(novoUsuario )
*/

/*
const nomeProfs = ['Lucas', 'Leo', 'Mika']

const novaListaProfs = [...nomeProfs, 'Maria Cláudia']
console.log(novaListaProfs)
*/

/*
const pessoa = {
  nome: 'Vitória',
  idade: 20,
  genero: 'músicas nos anos 80'
}

const novoObjeto = (objeto) => {

   let novaPessoa = {
    ...objeto,
    comida: ['Sushi', 'Churrasco', 'Carreteiro'],
    melhorAmigo: {
      nome: 'Manu',
      idade: 18,
      comida: ['Sushi', 'Xis']
    }
   }

   return `O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comida[0]}, ${novaPessoa.comida[1]} e ${novaPessoa.comida[2]}. Sua melhor amiga se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade}`
}

console.log(novoObjeto(pessoa))
*/

let personagens = [
  {nome: 'Shigeo Kageyama', idade: 15, poder: 'Psíquico'},
  {nome: 'Teruki Hanazawa', idade: 15, poder: 'Telecinese'},
  {nome: 'Arataka Reigen', idade: 27, poder: 'Nenhum'}
]

let adicionarPersonagem = (array) => {
    array.push({nome: 'Covinhas', idade: 50, poder: 'Amaldiçoado'})
}

