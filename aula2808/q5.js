let tn, i = 0

for(tn = 0;tn >= 0;){
    tn = prompt("digite a temperatura da pessoa(para sair digite um valor menor que 0)")

    if(tn > 38){
        i++
    }else if(tn < 0){

    }
}

console.log("tem  "+ i +" pessoas com febre")
