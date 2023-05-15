var nome = prompt('Qual é o seu nome?')

var altura = prompt('informe a sua altura em cm')

var peso = prompt('Informe o seu peso (quilos): ')

altura = parseFloat (altura)

peso = parseFloat (peso)

altura = altura / 100;

var massa = peso / (altura*altura)

var classificacao = '';

if(massa < 16) {
     classificacao = 'Peso muito grave'
} else if (massa >= 16 && massa <= 16,99) {
     classificacao = 'Baixo peso grave';
} else if ( massa >= 17 && massa <= 18,49) {
    classificacao = 'Baixo peso';
} else if ( massa >= 18,50 && massa <= 24,99) {
     classificacao = 'Peso normal';
} else if ( massa >= 25 && massa <= 29,99) {
     classificacao = 'Sobrepeso';
} else if ( massa >= 30 && massa <= 34,99) {
     classificacao = 'Obesidade grau I';
} else if ( massa >= 35 && massa <= 39,99) {
     classificacao = 'Obesidade grau II';
} else if ( massa > 40) {
     classificacao = 'Obesidade grau III ';
}

document.write( nome + ' possui indice de massa corporal igual a ' + massa + ', sendo classificado como: ' + classificacao)


