function distribuiCaracter() {
    //selecionar o valor digitado
    var caracter = document.getElementById('entrada').value
    //limpar campo de digitação
    document.getElementById('entrada') + ''
    
    //limpar espaços em branco nas extremisdades da string
    caracter.trim()

    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adiconar o caracter no campo referente a numeros
            document.getElementById('apenas_numeros').value += caracter
        break;
        default:
            document.getElementById('apenas_letras').value += caracter
            //adicionar o caracter no campo referente a letras   
    }
}