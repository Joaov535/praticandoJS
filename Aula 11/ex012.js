function nac() {
    var país = document.querySelector('input#nacionalidade')
    var p = String(país.value)
    if (p != 'Brasil') {
        paragrafo.innerHTML = '<p>Você é estrangeiro</p>'
    } else {
        paragrafo.innerHTML = '<p>Você é Brasileiro</p>'
    }
}