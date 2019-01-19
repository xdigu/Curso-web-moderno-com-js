/**
 * nome = saudacao, valor = 'opa'
 */

const saudacao = 'opa' // Contexto léxico 1
console.log(saudacao)

function exec() {
    const saudacao = 'fala'
    return saudacao
}
console.log(exec())

const cliente  ={
    nome: 'cliente',
    idade: 32,
    endereco: {
        rua: 'um',
        numero: 365
    }
}
console.log(cliente)
