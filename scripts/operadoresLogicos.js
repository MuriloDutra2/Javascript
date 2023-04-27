
// && = e 
//se um for false, todas são falsas

if (2 == 2 && 3 >= 1 && 'a' == 'b') {
document.write('Verdadeiro <br>')
} else {
    document.write('Falso <br>')
}

// Operador OU  || 
//se um for true, a expressão inteira é true

if (2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write('Verdadeiro <br>')
    } else {
        document.write('Falso <br>')
    }

//Operador Negação !
//Inverte o resultado 
if (!(5 >= 2)) {
    document.write('Verdadeiro <br>')
    } else {
        document.write('Falso <br>')
    }

//Retomado o desafio
var nota = prompt('Qual é a nota do aluno?')
var faltas = prompt('Qual é as quantidades de faltas?')

var media = 7
var faltas_maximas = 15


if(nota >= media && faltas <= faltas_maximas ) {
    document.write('aprovado <br>')
} else {
    document.write('reprovado <br> ')
}