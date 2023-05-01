var nota = prompt('Qual é a nota do aluno?')
var faltas = prompt('Qual é as quantidades de faltas?')

var media = 7
var faltas_maximas = 15


var resultado =  (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)