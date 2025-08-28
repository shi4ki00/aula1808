let i
let m = [i], n = [i]
let mda
let soma

for(i = 1; i <= 5; i++){
    n[i] = prompt("digite a nota do aluno "+ i)
    n[i] = Number(n[i]) 
} 

for(i = 1; i <= 5; i++){
    m[i] = prompt("digite a matricula do aluno "+ i)
}

soma = n[1] + n[2] + n[3] + n[4] + n[5]
console.log(soma)


    mda = (soma/5)
    console.log(mda)

for(i = 1; i <= 5; i++){
if(n[i] >= mda){
    console.log(m[i])
}
}