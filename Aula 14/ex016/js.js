function iniciarContagem() {
    var start = document.getElementById('inicio')
    var inicio = Number(start.value)
    var end = document.getElementById('fim')
    var fim = Number(end.value)
    var res = document.getElementById('res')
    var jump = document.getElementById('passo')
    var passo = Number(jump.value)

    if(inicio % 1 !== 0 || fim % 1 !== 0 || passo % 1 !== 0) {
        alert('Digíte números inteiros')
    } else if(inicio > fim){
        alert('Início tem que ser menor que Fim')
    } else {
        
    }
}

