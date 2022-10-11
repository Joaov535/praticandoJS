function tabuada() {
    let num1 = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    tab.innerHTML = ''

    if (num1.value.length == 0) {
        window.alert('[ERRO] Digíte um Número')
    } else {
        let num = Number(num1.value)
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
        }
    }

}