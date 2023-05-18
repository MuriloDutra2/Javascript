// 3 escopos: global, função, bloco

var serie = 'Friends'

// escopo de bloco
if (true) {
    var  serie2 = "Game of de thrones"
    document.write(serie)
}

document.write(serie2)

document.write('<br/ >')

function x() {

    var serie3 = "The walking dead"
    document.write(serie)
    document.write(serie2)
}

x()

document.write('<br/ >')
document.write(serie3)