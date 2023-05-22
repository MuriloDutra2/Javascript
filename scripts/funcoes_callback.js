function exibiArtigo(id, callbackSucesso, callbackErro) {
    //logica: recuperar o Id via requisiçaop http
    if (true) {
        callbackSucesso('Funções de callback em JS', ' Funções de callback são muito utilizadas...')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />:')
    document.write('<p>' + descricao + '</p>')
}

var callbackErro = function(erro) {
    document.write(document.write(
    '<p>' + erro + '</p>'))
}

exibiArtigo(1, callbackSucesso, callbackErro)