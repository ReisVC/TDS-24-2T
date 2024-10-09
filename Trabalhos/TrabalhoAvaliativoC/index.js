// Nomes: VITOR REIS & LUCAS WILLIAM;
// Função para validar o nome do personagem;
function validarNome() {

    let numeros = '0123456789'
    // Estrutura para verificar se há números no nome do personagem;
    for(let letra of personagem.nome) {
        for(let numero of numeros) {
            if(letra == numero) {
                document.getElementById("par").innerHTML = "Não são permitidos números no nome!"
                return false;
            }
        }
    }

    let alfabeto = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúãõüïäëâêîôûàèìòùÁÉÍÓÚÃÕÜÏÄËÂÊÎÔÛÀÈÌÒÙ"
    
     // Condicional para verificar se há algum valor no input;
    if(personagem.nome == "") {
      document.getElementById("par").innerHTML = "Você precisa colocar um nome!" 
      return false;
    }

    // Condicional para verificar quantidade de letras no nome;
    if(personagem.nome.length < 3) {
    document.getElementById("par").innerHTML = "Nome muito curto, tente um nome maior!";
    } else if(personagem.nome.length > 20) {
    document.getElementById("par").innerHTML = "Nome muito longo, máximo de 20 caracteres!";
    } else {

      // Laço para verificar se há caracteres especiais no nome;
      for(let letra of personagem.nome) {
         if(alfabeto.includes(letra)) {
         } else {
            document.getElementById("par").innerHTML = "Você não pode colocar caracteres especiais!"
            return false
         }
       }
        return true;
    }
}

// Função para validar vida do personagem;
function validarVida() {

 // Valor base máximo da vida do personagem;
 let vidaMax = 30

 // Condicional que muda o valor máximo permitido de acordo com o item escolhido;
 switch(personagem.item) {
    case "Smoke Bomb":
    vidaMax -= 5;
    break;

    case "Lantern":
    vidaMax += 4;
    break;

    case "Hookshot":
    vidaMax += 7;
    break;

    case "Ocarina":
    vidaMax += 10;
    break;

    case "Life Heart":
    vidaMax += 40
    break;

    default:
    document.getElementById("par").innerHTML = "Item não encontrado!";
    return false;
 }

  // Condicional para verificar se há algum valor no input;
 if(personagem.hp === "") {
   document.getElementById("par").innerHTML = "Você precisa colocar um valor de vida!"
   return false
 }

 // Condicional para verificar se é um número inteiro;
 if(personagem.hp % 2 === 1 || personagem.hp % 2 === 0) {
 } else {
   document.getElementById("par").innerHTML = "O valor de vida precisa ser um númeo inteiro!"
   return false;
 }

 // Condicional para verificar o mínimo e o máximo do valor;
  if(personagem.hp <= 0) {
    document.getElementById("par").innerHTML = "Nível de vida muito baixo, tente uma vida maior!"
 } else if(personagem.hp > vidaMax) {
    document.getElementById("par").innerHTML = `Nível de vida alto, o limite máximo graças ao item ${personagem.item} é ${vidaMax}!`
 } else {
    return true;
 }
}

// Função para validar o dano de ataque do personagem;
function validarAtaque() {

 // Valor base máximo do dano do personagem;
 let danoMax = 20

 // Condicional que muda o dano máximo de acordo com a arma do personagem;
 switch(personagem.arma) {
    case "Master Sword":
    danoMax += 40;
    break;
    
    case "Hylian Shield":
    danoMax += 10;
    break;

    case "Bow and Arrow":
    danoMax += 30;
    break;

    case "Fire Rod":
    danoMax += 25;
    break;

    case "Boomerang":
    danoMax += 20;
    break;

    default:
    document.getElementById("par").innerHTML = "Arma não encontrada!";
    return false;
 }

 // Condicional para verificar se há algum valor no input;
 if(personagem.ataque === "") {
   document.getElementById("par").innerHTML = "Você precisa colocar um valor de ataque!"
   return false
 }

 // Condicional para verificar se é um número inteiro;
 if(personagem.ataque % 2 === 1 || personagem.ataque % 2 === 0) {
} else {
  document.getElementById("par").innerHTML = "O valor do ataque precisa ser um númeo inteiro!"
  return false;
}


 // Condicional que verifica valor mínimo e máximo permitido para o personagem;
 if(personagem.ataque <= 0) {
    document.getElementById("par").innerHTML = "Ataque muito baixo, tente um valor mais alto!"
 } else if (personagem.ataque > danoMax){
    document.getElementById("par").innerHTML = `Erro, seu ataque máximo com a arma ${personagem.arma} é ${danoMax}`
 } else {
    return true
 }
}

// Função que valida nível de defesa do personagem;
function validarDefesa() {
 
 // Valor base da defesa do personagem;
 let defesaMax = 20

 // Condicional que muda defesa de acordo com a arma escolhida;
 switch(personagem.arma) {
    case "Master Sword":
    defesaMax += 10;
    break;
    
    case "Hylian Shield":
    defesaMax += 50;
    break;

    case "Bow and Arrow":
    defesaMax += 10;
    break;

    case "Fire Rod":
    defesaMax += 20;
    break;

    case "Boomerang":
    defesaMax += 25;
    break;

    default:
    document.getElementById("par").innerHTML = "Arma não encontrada!";
    return false;
 }

 // Condição que muda a defesa do personagem de acordo com o item escolhido;
 switch(personagem.item) {
    case "Smoke Bomb":
    defesaMax += 10;
    break;

    case "Lantern":
    defesaMax += 10;
    break;

    case "Hookshot":
    defesaMax += 15;
    break;

    case "Ocarina":
    defesaMax += 20;
    break;

    case "Life Heart":
    defesaMax += 15;
    break;

    default:
    document.getElementById("par").innerHTML = "Item não encontrado!";
    return false;
 }

 // Condicional para verificar se há algum valor no input;
 if(personagem.defesa === "") {
   document.getElementById("par").innerHTML = "Você precisa colocar um valor de defesa!"
   return false
 }

 // Condicional para verificar se é um número inteiro;
 if(personagem.defesa % 2 === 1 || personagem.defesa % 2 === 0) {
} else {
  document.getElementById("par").innerHTML = "O valor do defesa precisa ser um númeo inteiro!"
  return false;
}

 // Condicional que valida a defesa escolhida pelo usuário;
 if(personagem.defesa <= 0) {
    document.getElementById("par").innerHTML = "Erro! Valor de Defesa muito baixo!"
 } else if(personagem.defesa > defesaMax) {
    document.getElementById("par").innerHTML = `Erro! Sua defesa máxima é ${defesaMax} graças a arma ${personagem.arma} e ao item ${personagem.item}!`
 } else {
    return true;
 }

}

// Objeto do personagem;
let personagem = {
    nome: "",
    hp: "",
    ataque: "",
    defesa: "",
    arma: "",
    item: ""
}

function esvaziarInput() {
   document.getElementById("nome").value = "" 
   document.getElementById("hp").value = ""
   document.getElementById("ataque").value = ""
   document.getElementById("defesa").value = ""
   document.getElementById("select2").value = "Smoke Bomb"
   document.getElementById("select").value = "Master Sword"
   document.getElementById("titlePage").innerHTML = "Valide seu personagem!"
}

let personagens = []
let infos

function validar() {
    event.preventDefault()

    // Variáveis que guardam os valores de cada escolha do usuário;
    personagem.nome = document.getElementById("nome").value;
    personagem.hp = document.getElementById("hp").value;
    personagem.ataque = document.getElementById("ataque").value;
    personagem.defesa = document.getElementById("defesa").value;
    personagem.arma = document.getElementById("select").value;
    personagem.item = document.getElementById("select2").value;

    // Chamando todas as validações do personagem;
    cond1 = validarDefesa()
    cond2 = validarAtaque()
    cond3 = validarVida()
    cond4 = validarNome()

    // Condicional que imprime propriedades do personagens se todas condições forem verdadeiras;
    if(cond1&&cond2&&cond3&&cond4) {
      infos = `<tr><td>${personagem.nome}</td> <td>${personagem.hp}</td> <td>${personagem.ataque}</td> <td>${personagem.defesa}</td> <td>${personagem.arma}</td> <td>${personagem.item}</td></tr>`;
      personagens.push(infos)  

    // Mensagem de confirmação da validação do personagem;
    document.getElementById("par").innerHTML = "Personagem validado com sucesso!"

    // Variável que guarda a estrutura base da tabela;
    let tabela = "<tr> <th>Personagem</th> <th>Vida</th> <th>Ataque</th> <th>Defesa</th> <th>Arma</th> <th>Item</th> </tr>";
   
    // Laço que itera o personagem à tabela;
    for(let i = 0; i < personagens.length; i++) {
    tabela += personagens[i]}

    let contador = 0
    // Variável que imprime a estrutura total da tabela;
    document.getElementById("table").innerHTML = tabela
      
    // Condição de Teste nº 1/4
    if(personagens.length === 1) {
    document.getElementById("nome").value = "Vitor Vitalino da Conceição dos Reis" 
    document.getElementById("hp").value = 30
    document.getElementById("ataque").value = 25
    document.getElementById("defesa").value = 30
    document.getElementById("select2").value = "Ocarina"
    document.getElementById("select").value = "Hylian Shield"
    document.getElementById("titlePage").innerHTML = "Validar Condição de Teste nº 2/5"
    contador +=1
    }

    // Condição de Teste nº 2/4
    if(personagens.length === 2) {
      document.getElementById("nome").value = "Vitor21" 
      document.getElementById("hp").value = 30
      document.getElementById("ataque").value = 27
      document.getElementById("defesa").value = 15
      document.getElementById("select2").value = "Lantern"
      document.getElementById("select").value = "Boomerang"
      document.getElementById("titlePage").innerHTML = "Validar Condição de Teste nº 3/5"
      contador +=1
      }

    // Condição de Teste nº 3/4
    if(personagens.length === 3) {
         document.getElementById("nome").value = "Lucas" 
         document.getElementById("hp").value = 35
         document.getElementById("ataque").value = 70
         document.getElementById("defesa").value = 23
         document.getElementById("select2").value = "Ocarina"
         document.getElementById("select").value = "Master Sword"
         document.getElementById("titlePage").innerHTML = "Validar Condição de Teste nº 4/5"
         contador +=1
         }

    // Condição de Teste nº 4/4
    if(personagens.length === 4) {
      document.getElementById("nome").value = "Diogo Portugal" 
      document.getElementById("hp").value = 32
      document.getElementById("ataque").value = 25
      document.getElementById("defesa").value = 26
      document.getElementById("select2").value = "Life Heart"
      document.getElementById("select").value = ""
      document.getElementById("titlePage").innerHTML = "Validar Condição de Teste nº 5/5"
      contador +=1
      }
    
    // Condição para sair dos testes de validação;
    switch(contador) {
      case 4: 
      esvaziarInput()
      contador += 1
      break;

      case 5: 
      esvaziarInput()
      break;
    }
   
    }

}

// Função que limpa a tabela com as informações do personagem;
function limparTabela() {
   let titulo = document.getElementById("titlePage").innerHTML;
   let teste = "Teste"

   // Condicional para verificar se o programa está nas condições de testes;
   if(titulo.includes(teste)) {
      document.getElementById("par").innerHTML = "Termine os testes para poder limpar a tabela!"
   } else {
    personagens = []
    document.getElementById("table").innerHTML = "<tr> <th>Personagem</th> <th>Vida</th> <th>Ataque</th> <th>Defesa</th> <th>Arma</th> <th>Item</th>" + 
    "</tr> <tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>";    
   }
}
