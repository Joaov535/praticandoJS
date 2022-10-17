//declarando vetor
let valores = [4, 6, 8, 5, 2, 3]
//mostrando vetor
console.log(valores)
//comprimento do vetor
console.log(`O vetor tem ${valores.length} posições`)
//mostrando vetor de forma tratada
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
/*mostrando o vetor de forma mais simplificada
essa sintáxe funciona apenas para veotres e objetos*/
valores.sort()
for (let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}