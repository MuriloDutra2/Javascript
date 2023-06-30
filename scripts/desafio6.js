var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function limpaImput() {
    document.getElementById('input')
    input.value = ''
}

function recuperaValor () {
    
    var valor = document.getElementById('input').value
    if (valor === '') {
        alert('insira um valor valido')
    } else {
        
        if(objetos.indexOf(valor) > -1) {
            alert('objeto ja foi adicionado')
        } else {
            objetos.push(valor)
            limpaImput()
            console.log(objetos)
        }

    }
}

function ordernarArray() {
    console.log(objetos.sort())
    
}

