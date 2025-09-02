let s = 0, soma = 0


while(s >= 0){

s = prompt("digite o salario do membro da familia(digite um numero negativo para ver o total)")
s = Number(s)
    if(s >= 0 ){
 
    soma = soma + s

}
} 

console.log("o salario da familia e de: "+ soma)
