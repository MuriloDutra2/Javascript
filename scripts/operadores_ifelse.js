var murilo = 2
var joao = 3

//igual
if( murilo == 2) {
    document.write('Entrou no bloco if (verdadeiro) <br>')
} else {
    document.write('Entrou no bloco else (falso) <br>')
}


//diferente
if( joao != 2) {
    document.write('Entrou no bloco if (verdadeiro) <br>')
} else {
    document.write('Entrou no bloco else (falso) <br>')
}

//não identico
if( "2" !== 2) {
    document.write('Entrou no bloco if (verdadeiro) <br>')
} else {
    document.write('Entrou no bloco else (falso) <br> ')
}

// menor que

if( 8 < 2) {
    document.write('Entrou no bloco if (verdadeiro) <br>')
} else {
    document.write('Entrou no bloco else (falso) <br> ')
}

//maior que

if( 8 > 2) {
    document.write('Entrou no bloco if (verdadeiro) <br>')
} else {
    document.write('Entrou no bloco else (falso) <br> ')
}

//maior igual

if(5 <= 22) {
    document.write('Entrou no bloco if (verdadeiro) <br>')
} else {
    document.write('Entrou no bloco else (falso) <br> ')
}

//menor igual
if(5 >= 22) {
    document.write('Entrou no bloco if (verdadeiro) <br>')
} else {
    document.write('Entrou no bloco else (falso) <br> ')
}

//teste da media do aluno

var nota = prompt('Qual é a nota do aluno?')
var media = 7


if(nota >= media) {
    document.write('aprovado <br>')
} else {
    document.write('reprovado <br> ')
}
