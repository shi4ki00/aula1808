let si = 0
let qtde = 0

while (true) {
    let idade = prompt("Digite a idade (ou 0 para encerrar):")
    
    if (idade <= 0) {
        break
    }
    
    si += idade
    qtde++
}

if (qtde > 0) {
    let media = si / qtde
    console.log("A média de idade é:"+ media)
} else {
    console.log("Nenhuma idade válida foi digitada.")
}