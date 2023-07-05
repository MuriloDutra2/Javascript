var listaFuncionario = ['Mafe', 'Livia' , 'Madu' , 'Thai', 'Danilo']




 var f = function(valor, indice) {
    console.log(valor, indice) 
}

listaFuncionario.forEach(f)
/*
console.log(listaFuncionario)
document.write(listaFuncionario[3])

listaFuncionario.forEach(function(valor, indice, array){
    //logica

    console.log('indice ' + indice + ' | valor: ' + valor)

    if(valor == 'Thai') {
        array[indice] = 'um Novo valor'
    }
    console.log(array)
})


document.write('<br />' + listaFuncionario[3])
*/