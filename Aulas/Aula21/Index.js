let ilha = [
  [0, 0, 4, 0, 0, 4, 0, 0, 1, 1],
  [0, 3, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 3, 0, 1, 0, 0, 0, 3, 0],
  [1, 0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 1, 4, 1, 0],
  [1, 3, 0, 0, 0, 0, 1, 0, 0, 3],
  [0, 0, 1, 0, 0, 1, 3, 0, 1, 1],
  [0, 0, 0, 4, 0, 0, 0, 0, 4, 0]
]

function mostrarIlha() {
  console.log(' ')
  console.log(ilha[0])
  console.log(ilha[1])
  console.log(ilha[2])
  console.log(ilha[3])
  console.log(ilha[4])
  console.log(ilha[5])
  console.log(ilha[6])
  console.log(ilha[7])
  console.log(ilha[8])
  console.log(ilha[9])

}

function subir() {

  for(let i = 0; i < ilha.length; i++) {
    for(let j = 0; j < ilha[i].length; j++){

      if(ilha[i][j] === 3) {
        if(ilha[i-1][j] == 0) {
          ilha[i-1][j] = 3
          ilha[i][j] = 0
        }
      }

      if(ilha[i][j] === 4) {
        if(ilha[i-1][j] == 0) {
          ilha[i-1][j] = 4
          ilha[i][j] = 0
        }
      }
      }
      
  }
}

 
function descer() {

}

function direita() {

}

function esquerda() {

}

mostrarIlha()
subir()
mostrarIlha()