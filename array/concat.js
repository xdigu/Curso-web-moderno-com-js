/**
 * Concatena Array
 */

const filhas = ['Maria', 'Ana']
const filhos = ['João', 'Paulo']

const todos = filhas.concat(filhos, 'Fulano', 'alou')

console.log(filhas)
console.log(filhos)
console.log(todos)

console.log([].concat(1, [2, 3, 4], [5], [
    [6, 7],
    [8, 9]
]))