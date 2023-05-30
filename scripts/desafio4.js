var n1  = prompt('Insira um numero: ')

n1 = parseInt(n1)

var operacao = prompt('soma ou subtração ?')

var n2 = prompt('insira um segundo numero: ')

n2 = parseInt(n2) //ndaskjbda

function calcular (n1, n2 , operacao) {
if(operacao == 'soma') {
resultado = (n1 + n2)
return resultado
} if (operacao == 'subtração') {
    var resultado = (n1 - n2)
return resultado
}
}

var resultado = calcular(n1, n2, operacao)

document.write('O resultado é: ' + resultado)
