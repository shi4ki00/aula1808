let MA
let ME

for (let i = 0; i < 10; i++) {
    let numero = prompt("Digite um número:");
    
    if (numero > MA) {
        MA = numero
    }
    
    if (numero < ME) {
        ME = numero
    }
}

console.log("O MA número digitado foi: "+ MA);
console.log("O ME número digitado foi: "+ ME);