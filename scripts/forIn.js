//var listaConvidados = ['Jorge', 'Ricardo', 'Murilo', 'Heytor', 'Deric']


var listaConvidados = Array()

listaConvidados['a'] = 'Jorge'
listaConvidados [10] = 'Ricardo'
listaConvidados['elefante'] = 'Murilo'
listaConvidados[-1] = 'Heytor'
listaConvidados[true] = 'Deric'

console.log(listaConvidados)

for(var x in listaConvidados) {
    console.log('Indice ' + x + ' valor ' + listaConvidados[x])
}