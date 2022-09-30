function exec() {

    let data = new Date()
    let infoDia = data.getDate()
    let infoMes = data.getMonth()
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