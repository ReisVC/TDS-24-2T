function checkArrays(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2); // Função para verificar as arrays
  }
  
  const lista = ['REBOQUE', 'PIADA', 'TRABALHO', 'FREIRA', 'PARANORMAL', 'FENOMENO', 'COLEGA', 'SONHADOR', 'PORTUGAL', 'PODER', 'REVERSO', 'PALAVRA', 'PINTOR', 'COMEDIANTE']
  let sub = '_'
  
  let esc = Math.floor(Math.random()*((lista.length))) // Gerador de número aleatório
  
  let palavra = []
  let palavraFinal = []
  
  for(let letra of lista[esc]) { // Converte a string para elementos de array
    palavra.push(letra)
  }
  
  while(palavraFinal.length <lista[esc].length) {  // Adiciona '_' a partir da quantidade de letras
    palavraFinal.push(sub)
  }
  
  console.log(palavraFinal)
  
  let tent = palavra.length + 3 // Adiciona 3 chances para erros
  
  while (tent !== 0 && !(checkArrays(palavra, palavraFinal))) {
    tent -= 1
    let resposta = prompt(`Digite a letra, sua palavra tem ${palavra.length} letras`).toUpperCase()
  
    for (let i = 0; i < palavra.length; i++) {
      if (resposta === palavra[i]) {
        palavraFinal[i] = resposta // Substitui o '_" pela letra correta
        console.log(palavraFinal)
      }
    }
  }
  
  if(checkArrays(palavra, palavraFinal)) { 
    console.log('VOCÊ CONSEGUIU')
  } else {
    console.log('VOCÊ PERDEU, TENTE NOVAMENTE')
  }