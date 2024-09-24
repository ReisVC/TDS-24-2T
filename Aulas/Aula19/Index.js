/*
let matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(matriz[0][1])
console.log(matriz[1][2])
console.log(matriz[2][0])
*/

/*
let matriz2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
]

console.log(matriz2[2][2])

*/

/*
let matriz3 = []

matriz3[0] = [1,2,3]
matriz3[1] = [4,5,6]
matriz3[2] = [7,8,9]

console.log(matriz3[1][2])
*/

/*
let newMatriz = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

newMatriz[1][2] = 1
console.log(newMatriz[0])
console.log(newMatriz[1])
console.log(newMatriz[2])

*/

/*
let tabuleiro = [
  ['-','-','-'],
  ['-','-','-'],
  ['-','-','-'],
]

console.log()
*/

let matriz2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
]

for(let i = 0; i < matriz2.length; i++) {
  for(let j = 0; j < matriz2[i].length; j++) {
    console.log(matriz2[i][j])
  }
}
let soma = 0
for(let i = 0; i < matriz2.length; i++) {
  for(let j = 0; j < matriz2[i].length; j++) {
    soma+= matriz2[i][j]
  }
  }
console.log(`A soma de todos os números da matriz é ${soma}`)