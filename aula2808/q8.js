let no, hp, ataque, level 
let opção 
let ataque2, hp2
hp = Math.floor(Math.random() * (10 - 5 + 1)) + 5

let pokemao = {
    nome: no,
    vida: hp,
    atake: ataque,
    lv: level
}
pokemao.lv = 1

while(opção != "4"){
    opção = prompt("Escolha uma opção: \n1. Atacar \n2. Defender \n3. Fugir \n4. Sair")
    if(opção == "1"){
        let pokemao2 = {
            atake2: ataque2,
            vida2: hp2
        }
        hp2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5
        while(pokemao.vida > 0 || pokemao2.vida2 > 0){

        pokemao.atake = Math.floor(Math.random() * (3 - 1 + 1)) + 1

        pokemao2.atake2 = Math.floor(Math.random() * (4 - 0 + 1)) + 0

        if(pokemao.atake > pokemao2.atake2){
            pokemao2.vida2 = pokemao2.vida2 - pokemao.atake

        } else if(pokemao.atake < pokemao2.atake2){
            pokemao.vida = pokemao.vida - pokemao2.atake2
        }else if(pokemao.atake == pokemao2.atake2){
            pokemao.vida = pokemao.vida - 0
            pokemao2.vida2 = pokemao2.vida2 - 0
        }
        console.log("Vida do seu pokemão: " + pokemao.vida + "\nVida do pokemão inimigo: " + pokemao2.vida2)
    }
    }
}
