//setimeout, passe uma ordem e ela acontece depois de um certo tempo
//setTimeout(function() {document.write('Murilo')}, 2000)


var i = 5



//passe uma ordem e ela vai acontecendo sem parar depois de um certo tempo




var x = setInterval(function() {document.write(i)
     i--, '<br />'
     

     if(i === 0) {
        clearInterval(x)
     }
    }, 1000)