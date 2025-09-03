let resultado
let i, s = 0, m = 0, su = 0, d = 0




let v = [i]
let operação

v[0] = prompt("digite um valor")
v[0] = Number(v[0])
resultado = v[0]

while (operação != "e") {
    i++
    let operação = prompt("a) SOMA \nb) SUBTRAÇÃO \nc) MULTIPLICAÇÃO \nd) DIVISÃO \ne) sair \nNumero atual: " + resultado)
    if (operação != "e") {
        v[i] = prompt("digite um valor \n " + resultado)
        v[i] = Number(v[i])
    }

    if (operação == "a") {
        resultado = resultado + v[i]
        resultado = Number(resultado)
        s++
        s = Number(s)
    } else if (operação == "b") {
        resultado = resultado - v[i]
        resultado = Number(resultado)
        su++
        su = Number(su)
    } else if (operação == "c") {
        resultado = resultado * v[i]
        resultado = Number(resultado)
        m++
        m = Number(m)
    } else if (operação == "d") {
        resultado = resultado / v[i]
        resultado = Number(resultado)
        d++
        d = Number(d)
        if (v[i] == 0) {
            console.log("não é possivel fazer esse calculo")
        }
    } else if (operação == "e") {
        break
    } else if (operação != "a" || operação != "b" || operação != "c" || operação != "d" || operação != "e") {
        alert("operação incorreta")

    }

}

console.log("o valor total foi: " + resultado)
alert("O numero de vezes que cada operação foi usada:\nSoma: " + s + "\nSubtração: " + su + "\nMultiplicação: " + m + "\nDivisão: " + d)