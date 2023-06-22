function mudarCor(corDeFundo) {
    document.getElementById('texto').style.background = 'yellow'
}

function contarLetras() {
    var valorCampo = document.getElementById('texto').value

    if(valorCampo.leght < 3){
    document.getElementById('texto').style.background = 'red'
} else{
    document.getElementById('texto').style.background = 'green'
}
}