
/*
var largura = prompt('digite a largura do terreno em metros')

var comprimento = prompt('digite o comprimento do terreno em metros')

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' +  area + ' metros quadrados' )

function calcularAreaTerreno (largura, comprimento) {

    //logica
    var area = largura * comprimento
    
    return area
    
    }
*/
//talvez de noite
function soma(a, b, c) {
    a = a === undefined ? 0 : a 
    b = b === undefined ? 0 : b 
    return a + b
}

console.log(soma(7, 7))

console.log(soma(7, 7, 9, 15)) // desconsidera os parametros adicioanis

console.log(soma(7))

console.log(soma())