// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

const sub = (a, b) => a - b
console.log(sub(8, 3))

const somaMaisUm = a => a + 1
console.log(somaMaisUm(4))