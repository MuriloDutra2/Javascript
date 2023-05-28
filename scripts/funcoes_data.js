var data = new Date()

//document.write(data.getDate() + ' / ' + (data.getMonth() + 1) + ' / ' + data.getFullYear())
document.write()

//25 / 05 / 2023

/*
//adicionar / remover dias 
document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<br />')
document.write(data.toString())
document.write('<br /> <br /> <hr />')

//adicionar / remover meses

document.write(data.toString())
data.setMonth(data.getMonth() - 1)
document.write('<hr />')
document.write(data.toString())

//adicionar / remover anos

document.write(data.toString())
data.setFullYear(data.getFullYear() + 2)
document.write('<hr />')
document.write(data.toString())
*/

//17/03/2006
var data1 = new Date(2006, 2, 17)

//11/12/2006
var data2 = new Date(2006, 11, 11)

document.write(data1.toString())
document.write('<hr />')
document.write(data2.toString())
document.write('<hr />')

//converter a data para algo que possamos calcular

document.write(data1.getTime())
document.write('<hr />')
document.write(data2.getTime())
document.write('<hr />')

//encontrar a qtde de milissegundos entre a data1 e data2
var milisegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milisegundos_entre_datas)


//1 dia tem 24, cada hora tem 60 min, cada minuto tem 60 segundos e cada segundo tem 1000 milisegundos. Então quantos milisegundos existem em um dia?

//workday2

document.write('<hr />')

var milisegundos_por_dia = (1*24*60*60*1000)

document.write(' 1 dia tem: ' + milisegundos_por_dia + ' milisegundos')

document.write('<br /> <br /> <hr />')
document.write('A diferença entre dias é:'+  Math.ceil(milisegundos_entre_datas / milisegundos_por_dia))