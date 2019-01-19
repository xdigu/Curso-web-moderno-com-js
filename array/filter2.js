/**
 * Implementação do filter
 */
Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

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

console.log(produtos.filter2(fragil))
console.log('----')
console.log(produtos.filter2(naoFragil))
console.log('----')
console.log(produtos.filter2(caro))