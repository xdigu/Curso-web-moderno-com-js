// função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Segundo valor será undefined
imprimirSoma(2, 10, 5, 8, 21, 5, 67) //Somara somente os dois primeiros números

function soma(a, b = 0) {
    return a + b
}

console.log(soma(1, 2))
console.log(soma(1))
console.log(soma(1, 6, 8, 2, 1))
console.log(soma())