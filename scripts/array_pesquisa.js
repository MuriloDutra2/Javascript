var lista_frutas = Array()

lista_frutas[0] = 'banana'
lista_frutas[1] = 'maça'
lista_frutas[2] = 'morango'
lista_frutas[3] = 'Uva'

var auxiliar = lista_frutas.indexOf('Banana')

if(auxiliar === -1) {
    console.log('elemento não existe')
} else {
    console.log('elemento existe e está na posição ' + auxiliar)
}

