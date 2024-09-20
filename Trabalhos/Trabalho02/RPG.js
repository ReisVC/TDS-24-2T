let heroi = {
  nome: "",
  classe: "",
  nivel: 1,
  hp: 100,
  historico: [" Ataque", " Ataque", " Defesa"],
  habilidades: "",
  ataque: 10,
  defesa: 10,
};

let listaHerois = [];
let listaClasses = ["Mago", "Bardo"];

function escolherClasse() {
  console.log(
    `Escolha uma das classes abaixo: \n[1] Mago \n[2] Bardo \n[3] Bárbaro`
  );
  let esc = 0;
  while (esc < 1 || esc > 3) {
    esc = Number(
      prompt("Qual será a classe do seu personagem? Escolha o número")
    );
  }
  if (esc === 1) {
    return "Mago";
  }
  if (esc === 2) {
    return "Bardo";
  }
  if (esc === 3) {
    return "Bárbaro";
  }
}

function adicionarPersonagem() {
  if (listaHerois.length >= 5) {
    alert("Número máximo de personagens criados...");
  } else {
    let adicionarHeroi = {
      ...heroi,
      nome: prompt("Qual será o nome do seu personagem?"),
      classe: escolherClasse(),
    };

    if (adicionarHeroi.classe === "Mago") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 10,
        defesa: 20,
        habilidades: "Conjurar Chamas",
      };
    }
    if (adicionarHeroi.classe === "Bardo") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 10,
        defesa: 15,
        habilidades: "Tocar flauta",
      };
    }
    if (adicionarHeroi.classe === "Bárbaro") {
      novoHeroi = {
        ...adicionarHeroi,
        ataque: 20,
        defesa: 5,
        habilidades: "Bater com porrete",
      };
    }
    listaHerois.push(novoHeroi);
    return novoHeroi;
  }
}

function mostrarAtributos(objeto) {
  // Função que mostra todos os atributos do personagem, como nom, classe, etc...
  console.log(`Os atributos do seu personagem são: \nNome: ${objeto.nome} \nClasse: ${objeto.classe} \nHP: ${objeto.hp}
Histórico de ações: ${objeto.historico} \nhabilidades: ${objeto.habilidades} \nNível: ${objeto.nivel} \nAtaque: ${objeto.ataque}
Defesa: ${objeto.defesa}`);
}

function listarPersonagens() {
  if (listaHerois.length === 0) {
    alert("Nenhum personagem encontrado");
  }
  for (let i = 0; i < listaHerois.length; i++) {
    console.log(`[${i + 1}] Nome: ${listaHerois[i].nome} \nClasse: ${
      listaHerois[i].classe
    } \nHP: ${listaHerois[i].hp} \nhabilidades: ${listaHerois[i].habilidades}
Nível: ${listaHerois[i].nivel} \nAtaque: ${listaHerois[i].ataque} \nDefesa: ${
      listaHerois[i].defesa
    }`);
  }
}

function excluirPersonagem() {
  listarPersonagens();
  if (listaHerois.length > 0) {
    for (let i = 0; i < listaHerois.length; i++) {
      if (
        listaHerois[i].nome ===
        prompt("Qual o nome do personagem que você quer excluir?")
      ) {
        listaHerois.splice(i, 1);
      } else {
        alert("Personagem não encontrado");
      }
    }
  }
}

function menuPersonagens() {
  let escolha = 100;
  while (Number(escolha) !== 1) {
    escolha = Number(
      prompt(
        "[1] Ir para o jogo \n[2] Adicionar Personagens \n[3] Listar Personagens \n[4] Excluir Personagens "
      )
    );

    if (escolha === 2) {
      adicionarPersonagem();
    }

    if (escolha === 3) {
      listarPersonagens();
    }

    if (escolha === 4) {
      excluirPersonagem();
    }
  }
}

console.clear();
adicionarPersonagem();
menuPersonagens();

if (listaHerois.length === 0) {
  console.log(
    "Parece que você não tem nenhum personagem no momento, crie o seu herói..."
  );
  adicionarPersonagem();
}

function escolherPersonagem() {
listarPersonagens();
let pergunta = Number(
  prompt("Qual dos personagens você vai usar? Escolha o número.")
);
seuHeroi = listaHerois[pergunta - 1];
}

escolherPersonagem()
console.clear();
console.log("OLÁ, BEM VINDO AO NOSSO PEQUENO RPG ");

console.log(`[1] Começar a luta \n[2] Ver seus atributos \n[3] Trocar personagem`);
let escolhaJogador;
while (escolhaJogador > 0 || escolhaJogador < 5) {
  escolhaJogador = Number(
    prompt("Você encontrou Sauron, o que irá fazer? Escolha o número.")
  );

  if (escolhaJogador === 2) {
    mostrarAtributos();
  }

  if(escolhaJogador === 3) {
    escolherPersonagem()
  }
}
