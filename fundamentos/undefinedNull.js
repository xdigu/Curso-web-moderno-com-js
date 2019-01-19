const a = {
    name: "teste"
}
console.log(a)

/**
 * Sempre ao atribuir um objeto a outra variável ele atribui a referência
 * da memória dessa variável e não uma cópia dos valores, tudo que for
 * alterado de uma variável vai ser refletida na outra.
 */

const b = a
b.name = 'opa'
console.log(b)
console.log(a)

/**
 * Diferente do que acontece com tipos primitivos, ao fazer a atribuição,
 * ele faz uma cópia do valor para outra variável, ou seja, quando uma é
 * alterada, não interfere na outra.
 */

let c = 3
let d = c
d++
console.log(c)
console.log(d)



let valor // Variável não inicializada
console.log(valor)

valor = null
console.log(valor) // Ausência de valor

/**
 * Quando quiser zerar uma variável, adicione null a ela
 * o null não aponta para nenhum endereço da memória.
 */

const produto = {
    nome: null,
    valor: null,
    ola: null
}
console.log(produto.nome)
console.log(produto)
produto.preco = 3.5
console.log(produto)