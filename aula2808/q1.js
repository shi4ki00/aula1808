let i
let m = [i], n = [i]
let mda
let soma = 0

for(i = 1; i <= 5; i++){
    n[i] = prompt("digite a nota do aluno "+ i)
    n[i] = Number(n[i]) 
} 

for(i = 1; i <= 5; i++){
    m[i] = prompt("digite a matricula do aluno "+ i)
}


for(i = 1; i <= 5; i++){
    soma = soma + n[i]
}


    mda = (soma/5)

for(i = 1; i <= 5; i++){
if(n[i] >= mda){
    console.log(m[i])
}
}