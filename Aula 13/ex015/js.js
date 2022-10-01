function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txt = document.getElementById('res')
    var nasc = document.getElementById('anonasc')

    if (nasc.value == 0 || nasc.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        var idade = ano - Number(nasc.value)
        if (sexo[0].checked) {
            genero = 'Homem'
            if(idade > 0 && idade < 12){
                //Criança
                img.setAttribute('src','imagens/crianca-h.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','imagens/jovem-h.jpg')
            } else if(idade < 55) {
                //Adulto
                img.setAttribute('src','imagens/adulto-h.jpg')
            } else {
                //Idoso
                img.setAttribute('src','imagens/idoso-h.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src','imagens/crianca-m.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','imagens/jovem-m.jpg')
            } else if(idade < 55) {
                //Adulto
                img.setAttribute('src','imagens/adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src','imagens/idoso-m.jpg')
            }
        }
        txt.style.textAlign = 'center'
        txt.innerHTML = `Detectamos ${genero} de ${idade} anos`
        txt.appendChild(img)
    }
}