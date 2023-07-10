



var video = Array()

video[1] = Array()
video[1]['nome'] = 'Fullmetal'
video[1]['categoria'] = 'Anime'

function getVideo(video) {


    try{
//logica
//http
    console.log(video[0]['nome'])
} catch(erro){
    tratarErro(erro)
    
    console.log('Agora sim podemos tratar esse erro')

    throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora')
} finally{
    console.log('Sempre passa por aqui (try /catch')
}
console.log('Aplicação não morreu')   
}


function tratarErro (e) {
console.log(e)
}


getVideo(video)