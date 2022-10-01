function verificar() {
    var txt = document.getElementById('res')
    var nasc =  document.getElementById('anonasc');
    var idade = 2022 - Number(nasc.value);
    
    if(idade > 0 && 12 > idade){
        txt.innerText = `Detectamos uma criança de ${idade} anos`
    } else{
        txt.innerText = 'NADA'
    }
}