/**
 * Objeto no JS parece muito com um JSON
 * porém são coisas diferentes,
 * através de um objeto pode ser gerado um JSON
 */

const prod1 = {}

prod1.nome = 'Celular'
prod1.valor = 700
prod1['desconto bacana'] = '40%' // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 70,
    ['desconto bacana']: 0.4, // Evitar atributos com espaço
}

console.log(prod2)