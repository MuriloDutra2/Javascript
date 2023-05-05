
var parametro = prompt('digite um numero')

//parseInt usado para transformar Numero em string

//switch encara o parametro conforme o seu tipo, caso eu mande uma string ele não vai receber e vai dar default
switch(parseInt(parametro)) {
    //parametro === 2
    case 1: 
    document.write('parametro 1')
        break

    
    //parametro === 2
    case 2:
    document.write('parametro 2')
    break

    //parametro === 100
    case 100:
        document.write('parametro 100')
    break

    default:
        document.write('default')
//sem o breadk todos os codigos abaixo seriam processados
// default é importante caso haja algum erro, caso nenhum case corresponder o parametro, sem o default o codigo não vai executar
    
    }

