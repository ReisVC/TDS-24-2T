function nomes (){
  let nome = 'Vitor'
  let nome2 = 'Vitalino'
  let nome3 = 'Conceição'
  let nome4 = 'Reis'
  return [nome, nome2, nome3, nome4]
}

let nomesArray = nomes()
const nomeCompleto = `${nomesArray[0]} ${nomesArray[1]} da ${nomesArray[2]} dos ${nomesArray[3]}`
console.log(nomeCompleto)