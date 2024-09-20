let heroi = {
  nome: "",
  classe: "",
  hp: 100,
  historico: [" Ataque", " Ataque", " Defesa"],
  equipamentos: ["Espada", " Escudo", " Machado"],
};


let listaHerois = [];

function adicionarPersonagem() {
  let novoHeroi = {
    ...heroi,
    nome: prompt("Qual será o nome do seu personagem?"),
    classe: prompt("Qual será a classe do seu novo personagem"),
    nivel: 1,
  };
  listaHerois.push(novoHeroi)
  return novoHeroi;
}

function mostrarAtributos(objeto) {
  // Função que mostra todos os atributos do personagem, como nom, classe, etc...
  console.log(`Os atributos do seu personagem são: \nNome: ${objeto.nome} \nClasse: ${objeto.classe} \nHP: ${objeto.hp}
Histórico de ações: ${objeto.historico} \nEquipamentos: ${objeto.equipamentos} \nNível: ${objeto.nivel}`);
}

function listarPersonagens() {
    if(listaHerois.length === 0) {alert('Nenhum personagem encontrado')}

    for (let i = 0; i < listaHerois.length; i++) {
        console.log(`Nome: ${listaHerois[i].nome} \nClasse: ${listaHerois[i].classe} \nHP: ${listaHerois[i].hp} \nEquipamentos: ${listaHerois[i].equipamentos} \n`);
      }
}

function excluirPersonagem() {
    listarPersonagens()
    if(listaHerois.length > 0) {
    for(let i = 0; i < listaHerois.length; i++) {
        if(listaHerois[i].nome === prompt('Qual o nome do personagem que você quer excluir?')) {
            listaHerois.splice(i, 1)
        } else {
            alert('Personagem não encontrado')
        }
    }
}
}

let escolha = 100;
while (Number(escolha) !== 1) {
  escolha = Number(
    prompt(
      "[1] Ir para o jogo \n[2] Adicionar Personagens \n[3] Listar Personagens \n[4] Excluir Personagens "
    )
  );

  if (escolha === 2) {
    if (listaHerois.length >= 5) {
      alert("Número máximo de personagens criados...");
    } else {
      heroi2 = adicionarPersonagem();
    }
  }

  if (escolha === 3) {
    listarPersonagens()
  }

  if(escolha === 4) {
    excluirPersonagem()
  }
}

console.clear()

heroi1 = adicionarPersonagem();

console.log("OLÁ, BEM VINDO AO NOSSO PEQUENO RPG ");
mostrarAtributos(heroi1);
