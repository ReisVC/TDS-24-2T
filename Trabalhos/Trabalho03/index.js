let personagens = []
let armas = []
let itens = []

function validarPersonagem() {
    while(personagem.nome.length < 3 || personagem.nome.length > 20) {
        if(personagem.nome.length < 3) {
            alert('Nome de personagem muito curto...');
            personagem.nome = prompt('Qual nome do seu personagem?');
        } else {
            alert('Que nome grandão meu lindo, prefiro menores...')
            personagem.nome = prompt('Qual nome do seu personagem?');       
        }
    }

    while(personagem.vida < 1 || personagem.vida > 20) {
        if(personagem.vida < 1){
            alert('Poucos corações de vida, tente um número maior...')
            personagem.vida = Number(prompt('Quanto de vida seu personagem vai ter?'))
        } else {
            alert('Muitos corações de vida, tente um número menor...')
            personagem.vida = Number(prompt('Quanto de vida seu personagem vai ter?'))    
        }
    }

    while(personagem.ataque < 1 || personagem.ataque > 15) {
        if(personagem.ataque < 1) {
             alert('Dano de ataque muito baixo, tente um ataque maior...')
             personagem.ataque = Number(prompt('Quanto de ataque seu personagem vai ter?'));
        } else {
            alert('Dano de ataque inicial muito alto, tente um número menor...')
            personagem.ataque = Number(prompt('Quanto de ataque seu personagem vai ter?'))
        }
    }

    while(personagem.defesa < 1 || personagem.defesa > 10) {
        if(personagem.defesa < 1) {
            alert('Defesa muito baixa, tente um valor mais alto...')
            personagem.defesa = Number(prompt('Quanto de defesa seu personagem vai ter?'))
        } else {
            alert('Defesa muito alta, tente um valor menor...')
            personagem.defesa = Number(prompt('Quanto de defesa seu personagem vai ter?'))
        }
    }
    
    personagens.push(personagem)
    personagens.sort(function compare(a,b) {
        if(a.nome < b.nome) return -1;
        if(a.nome > b.nome) return 1;
        return 0;
      })
}
let personagem

personagem = {
    nome: prompt('Qual nome do seu personagem?'),
    vida: Number(prompt('Quanto de vida seu personagem vai ter?')),
    ataque: Number(prompt('Quanto de ataque seu personagem vai ter?')),
    defesa: Number(prompt('Quanto de defesa seu personagem vai ter?'))
}
validarPersonagem()
console.log(personagens)

