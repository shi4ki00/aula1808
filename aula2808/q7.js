let resultado
let i
let v = [i]
let operação

v[0] = prompt("digite um valor")
v[0] = Number(v[0])
resultado = v[0]

while(operação != "e"){
i++
let operação = prompt("a) SOMA \nb) SUBTRAÇÃO \nc) MULTIPLICAÇÃO \nd) DIVISÃO \ne) sair \nNumero atual: "+ resultado)

v[i] = prompt("digite um valor \n "+ resultado)
v[i] = Number(v[i])

if (operação == "a") {
  resultado = resultado + v[i]
  resultado = Number(resultado)

} else if (operação == "b") {
   resultado = resultado - v[i]
   resultado = Number(resultado)

} else if (operação == "c") {
    resultado = resultado * v[i]
    resultado = Number(resultado)

} else if (operação == "d") {
    resultado = resultado / v[i]
    resultado = Number(resultado)
    if (v[i] == 0) {
        console.log("não é possivel fazer esse calculo")
    }
} else if (operação == "e") {
    break
} else {
    console.log("operação incorreta")
    break
}
}

console.log("o valor total foi: "+ resultado)