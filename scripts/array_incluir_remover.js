var lista_frutas = Array()

lista_frutas[0] = 'banana'
lista_frutas[1] = 'maça'

//incluir elemnto no final do array

lista_frutas.push('Uva')

//incluir no inicio do array

lista_frutas.unshift('mamao')

//excluir elemento no final do array
lista_frutas.pop()

//excluir elemento no inicio do array
lista_frutas.shift()

//tambem podemos usar em multidimentisonais

var lista_coisas = Array()

lista_coisas['pessoas'] = Array()
lista_coisas['coisas'] = Array()


lista_coisas['pessoas'].push('Murilo')

lista_coisas['coisas'].push('mouse')



console.log(lista_coisas)