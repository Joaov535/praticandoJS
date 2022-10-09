function iniciarContagem() {
    let start = document.getElementById('inicio')
    let inicio = Number(start.value)
    let end = document.getElementById('fim')
    let fim = Number(end.value)
    let res = document.getElementById('res')
    let jump = document.getElementById('passo')
    let passo = Number(jump.value)
    res.innerHTML = 'Contando: '

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerText = 'Impossível contar'
    } else if (inicio % 1 !== 0 || fim % 1 !== 0 || passo % 1 !== 0) {
        alert('Digíte números inteiros')
    } else if (inicio >= fim) {
        do {
            res.innerHTML += `${inicio} `
            inicio -= passo
        } while (fim <= inicio)
    } else {
        do {
            res.innerHTML += `${inicio} `
            inicio += passo
        } while (inicio <= fim + 1)
    }
}

