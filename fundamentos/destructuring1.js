/**
 * Operador de desestruturação, ou seja, tira algo de uma estrutura
 * entende-se estrutura uma objeto, array, etc...
 */

const pessoa = {
    nome: 'Ana',
    idade: 32,
    enredeco: {
        logradouro: 'rua x',
        numero: 1000
    }
}

const {
    nome,
    idade
} = pessoa
console.log(nome)
console.log(idade)


const {
    nome: n,
    idade: i,
    enredeco: {
        logradouro: rua
    }
} = pessoa

console.log(n)
console.log(i)
console.log(rua)

