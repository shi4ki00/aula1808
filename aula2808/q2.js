let Si = 0
let Qtde = 0

while (true) {
    let idade = prompt("Digite a idade (ou 0 para encerrar):")
    
    if (idade <= 0) {
        break
    }
    
    Si += idade
    Qtde++
}

if (quantidade > 0) {
    let media = Si / quantidade
    console.logQtde"A média de idade é:"+ media)
} else {
    console.log("Nenhuma idade válida foi digitada.")
}