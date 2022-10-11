function iniciarContagem() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Dados incompletos')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('[ERRO] Passo não pode ser 0 </br> Assumiremos passo valendo 1')
            p = 1
        }
        if (i < f) {
            //Contagem progressiva
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{2714}`
            }

        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{2714}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}