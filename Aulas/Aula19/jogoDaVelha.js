read = require("readline-sync");

function retornaPosicao(letra) {
  let lugar = 0;
  while (lugar < 1 || lugar > 9) {
    lugar = Number(
      read.question(`Escreva onde colocar a letra ${letra}, de 1 a 9:\n`)
    );
    if (lugar == NaN) {
      lugar = 0;
    }
  }

  if (lugar === 1) {
    return [0, 0];
  }
  if (lugar === 2) {
    return [0, 1];
  }
  if (lugar === 3) {
    return [0, 2];
  }
  if (lugar === 4) {
    return [1, 0];
  }
  if (lugar === 5) {
    return [1, 1];
  }
  if (lugar === 6) {
    return [1, 2];
  }
  if (lugar === 7) {
    return [2, 0];
  }
  if (lugar === 8) {
    return [2, 1];
  }
  if (lugar === 9) {
    return [2, 2];
  }
}

function mostrarTabuleiro() {
  console.clear()
  
  console.log(" ");
  console.log(tabuleiro[0]);
  console.log(tabuleiro[1]);
  console.log(tabuleiro[2]);
  console.log(" ");
}

function perguntaX() {
  let posicao = retornaPosicao("X");
  let linha = posicao[0];
  let coluna = posicao[1];
  return [linha, coluna];
}

function perguntaO() {
  let posicaoO = retornaPosicao("O");
  linhaO = posicaoO[0];
  colunaO = posicaoO[1];
  return [linhaO, colunaO];
}

function verificarVitoria(letra) {
  if (
    tabuleiro[0][0] === letra &&
    tabuleiro[0][1] === letra &&
    tabuleiro[0][2] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }
  if (
    tabuleiro[1][0] === letra &&
    tabuleiro[1][1] === letra &&
    tabuleiro[1][2] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }
  if (
    tabuleiro[2][0] === letra &&
    tabuleiro[2][1] === letra &&
    tabuleiro[2][2] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }

  if (
    tabuleiro[0][0] === letra &&
    tabuleiro[1][1] === letra &&
    tabuleiro[2][2] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }
  if (
    tabuleiro[0][2] === letra &&
    tabuleiro[1][1] === letra &&
    tabuleiro[2][0] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }

  if (
    tabuleiro[0][0] === letra &&
    tabuleiro[1][0] === letra &&
    tabuleiro[2][0] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }
  if (
    tabuleiro[0][1] === letra &&
    tabuleiro[1][1] === letra &&
    tabuleiro[2][1] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }
  if (
    tabuleiro[0][2] === letra &&
    tabuleiro[1][2] === letra &&
    tabuleiro[2][2] === letra
  ) {
    jogo = 1;
    console.log(`Letra ${letra} ganhou o jogo`);
  }
}

function verificarEmpate() {
  let condicao = true;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      if (tabuleiro[i][j] > 0&&tabuleiro[i][j] < 10) {
        condicao = false;
      }
    }
  }

  if (condicao == true) {
    console.log("O JOGO EMPATOU");
    jogo = 1;
  }
}

function letraX() {
  mostrarTabuleiro();
  let posicao = perguntaX();
  linhaX = posicao[0];
  colunaX = posicao[1];

  if (tabuleiro[linhaX][colunaX] < 10 && tabuleiro[linhaX][colunaX] > 0) {
    jogo = 0;
    tabuleiro[linhaX][colunaX] = "X";
    verificarVitoria("X");
  } else {
    jogo = 2;
  }
}

function letraO() {
  mostrarTabuleiro();
  let posicaoO = perguntaO();
  linhaO = posicaoO[0];
  colunaO = posicaoO[1];

  if (tabuleiro[linhaO][colunaO] > 0 && tabuleiro[linhaO][colunaO] < 10) {
    jogo = 0;
    tabuleiro[linhaO][colunaO] = "O";
    verificarVitoria("O");
  } else {
    jogo = 2;
  }
}

function jogoDaVelha() {
  while (jogo !== 1) {
    letraX();
    while (jogo === 2) {
      jogo = 2;
      letraX();
    }

    if (jogo !== 1 || 0) {
      verificarEmpate();
    }

    if (jogo !== 1) {
      jogo = 2;
      letraO();
      while (jogo === 2) {
        letraO();
      }
      if (jogo !== 1 || 0) {
        verificarEmpate();
      }
    }
  }
}

let jogo;
let tabuleiro = [];
let jogarNovamente = "sim";

while (jogarNovamente === "sim") {
  console.clear()
  jogo = 0
  jogarNovamente = 'Não'
  tabuleiro = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];

  jogoDaVelha();
  mostrarTabuleiro();
  verificarVitoria('X')
  verificarVitoria('O')
  verificarEmpate()
  jogarNovamente = read.question("Deseja jogar novamente? ").toLowerCase();
}

console.log('Obrigado por jogar!!')