var largura = window.screen.availWidth
var altura = window.screen.availHeight

//document.write('Altura desse navegador é ' + altura + ' <br/>')
//document.write('Largura desse navegador é ' + largura + ' <br/>')

if(largura < 500) {
    document.write('Logica para impressão do menu versão mobile')
} else {
    document.write('Logica para impressão do menu versão web')
}