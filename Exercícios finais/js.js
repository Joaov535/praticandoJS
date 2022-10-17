let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#txtselect')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    res.innerHTML = ''
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text += `O número ${num.value} foi adicionado`
        lista.appendChild(item)
    } else {
        window.alert('[ERRO] Valor inválido ou já inserido.')
    }
    num.value = ''
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        alert('Insira valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
 
        for (let pos in valores) {
            soma += valores[pos] 
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media += soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Foram cadastrados ${tot} números.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor} </p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
