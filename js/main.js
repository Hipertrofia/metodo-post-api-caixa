let valor = prompt("Digite o valor a ser sacado: ")
let resto = Number(valor)

let notas100 = 0
let notas50 = 0
let notas20 = 0
let notas10 = 0

if (resto%10 == 0){
    while(resto >= 100){
        resto = resto - 100
        notas100++
    }
    
    while(resto >= 50){
        resto = resto - 50
        notas50++
    }
    
    while(resto >= 20){
        resto = resto - 20
        notas20++
    }
    
    while(resto >= 10){
        resto = resto - 10
        notas10++
    }

    document.write(`Seu saque será efetuado em: ${notas100} notas de 100, ${notas50} notas de 50, ${notas20} notas de 20 e ${notas10} notas de 10`)
} else {
    document.write('Este terminal não possui cédulas menores que 10. Porfavor, insira um valor múltiplo de 10')
} 

addEventListener("click", function(){
    location.reload() 
}) 

