/**
 * Constrou um novo Array a partir de uma verificação
 */

const produtos = [{
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'iPad Pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo de Vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de Platico',
        preco: 18.99,
        fragil: false
    }
]

// console.log(produtos.filter(function (e) {
//     return e.fragil == false
// }))

const fragil = e => e.fragil
const naoFragil = e => e.fragil == false
const caro = e => e.preco >= 3000

console.log(produtos.filter(fragil))
console.log('----')
console.log(produtos.filter(naoFragil))
console.log('----')
console.log(produtos.filter(caro))