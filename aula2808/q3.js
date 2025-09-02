let soma = 0

while (true) {
    let numero = prompt("Digite um número (ou 0 para encerrar):")
    
    if (numero === 0) {
        break
    }
    
    soma += numero
}

console.log("O somatório dos números é:"+ soma)