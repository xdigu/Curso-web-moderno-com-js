const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 2)
imprimirResultado(3, 6)
imprimirResultado(2, 5, soma)
imprimirResultado(2, 5, function (x, y) {
    return x - y
})
imprimirResultado(2, 5, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('falar')
    }
}

pessoa.falar()