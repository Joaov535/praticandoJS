function velocidade() {
    var velReg = document.querySelector('input#txtvel');
    var vel = Number(velReg.value);
    var res = document.querySelector('div#res');
    res.innerHTML = `<p>A velocidade registrada no radar foi de ${vel}Km/h</p>`
    if (vel > 60) {
        res.innerHTML += '<p>Você foi MULTADO por excesso de velocidade.</p>'
    }
    res.innerHTML += '<p>Dirija sempre com cuidado!</p>'
}