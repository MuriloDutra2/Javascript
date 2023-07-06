//for
/*
var a = Array()

a[0] = 'Murilo'
a[1] = 'Murino'
a[2] = 'Muriko'


for(var x = 0; x < a.length; x++) {
    document.write(a[x] + '<br />')
}
*/

//while

var y = 0

while(y < 10) {
    y++
    var x = 0
    while(x < 10) {
        x++
        
        document.write( y + ' x ' + x + ' = ' + (y * x) + '<br />')
    }
    document.write('<hr />  ')
}