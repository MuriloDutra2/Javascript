

var largura = prompt('digite a largura do terreno em metros')

var comprimento = prompt('digite o comprimento do terreno em metros')

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' +  area + ' metros quadrados' )

function calcularAreaTerreno (largura, comprimento) {

    //logica
    var area = largura * comprimento
    
    return area
    
    }