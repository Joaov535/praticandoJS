function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = fat * c
    }
    return fat
}

console.log(fatorial(5))

function potencia(){
    let num = 8
    num **= 2
    console.log(num)
}