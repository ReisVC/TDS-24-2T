let a = 10
let b = 10

console.log(b) // Saída é 10

b = 5 // Variável b passa a valer 5

console.log(a, b) // Imprime os valores 10 e 5




let c = 10
let d = 20
e = c // Variável c tem o valor de 10
d = e // Variável b passa a valer 10
c = d // Variável a passa a valer 10

console.log(c, d, e) // Imprime os valores 10, 10 e 10

//O código recebe dados de entrada do usuário através do prompt
let p = prompt("Quantas horas você trabalha por dia?") //Variável p pode ser subtituída pelo nome horasPorDia
let t = prompt("Quanto você recebe por dia?") //Variável t pode ser subtituída pelo nome salarioPorDia
console.log('Você recebe',t,'/',p,'por hora.')
