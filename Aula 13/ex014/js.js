function executar() {
    var texto = document.getElementById('txt')
    var imagem = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if (hora >= 6 && hora < 12) {
        texto.innerHTML = 'Bom Dia!'
        imagem.src = 'imagens/fotodia.jpg'
        document.body.style.background = '#03C2FF'
    } else if (hora >= 12 && hora < 18) {
        texto.innerHTML = 'Boa Tarde!'
        imagem.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#CC8B3B'
    } else if (hora >= 18 && hora <= 23) {
        texto.innerHTML = 'Boa noite!'
        imagem.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#071E36'
    } else {
        texto.innerHTML = 'Boa Madrugada!'
        imagem.src = 'imagens/fotomadrugada.jpg'
        document.body.style.background = '#0C0A36'
    }

}

function exec() {

    let data = new Date()
    let infoDia = data.getDate()
    let infoMes = data.getMonth() + 1
    let infoAno = data.getFullYear()
    let infoHora = `${data.getHours()}:${data.getMinutes()}`
    let infoDiaSem = data.getDay()

    switch (infoDiaSem) {
        case 0:
            infoDiaSem = 'Domingo'
        break    
        case 1:
            infoDiaSem = 'Segunda-Feira'
        break    
        case 2:
            infoDiaSem = 'Terça-Feira'
        break    
        case 3:
            infoDiaSem = 'Quarta-Feira'
        break    
        case 4:
            infoDiaSem = 'Quinta-Feira'
        break    
        case 5:
            infoDiaSem = 'Sexta-Feira'
        break    
        case 6:
            infoDiaSem = 'Sabado'
        break    
}

    paragrafo.innerHTML = `<p>Hoje é dia ${infoDia}/${infoMes}/${infoAno}</p>`
    paragrafo.innerHTML += `<p>Agora são ${infoHora}</p>`
    paragrafo.innerHTML += `Hoje é ${infoDiaSem}!`
}