

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(3))
console.log(soma(3, 5))
console.log(soma(3, 5, 3.2))
console.log(soma(3, 5, 3.2, "texto"))
console.log(soma(3, 5, 3.2, "texto", 5, 10))