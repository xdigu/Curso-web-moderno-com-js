const pilotos = ['alonso', 'hemilton', 'massa']

// Retira ultimo elemento
pilotos.pop()
console.log(pilotos)

// Adiciona elemento a ultima posição
pilotos.push('verstappen')
console.log(pilotos)

// Retira primeiro elemento
pilotos.shift()
console.log(pilotos)

// Adiciona ao primeiro elemento
pilotos.unshift('massa')
console.log(pilotos)

/**
 * Splice pode adicionar, remover elementos a partir de qualquer elento
 */

// Adicionar
pilotos.splice(2, 0, 'botas', 'haikkonen') //a partir do índice 2, não será removido nada e adicionaremos 2 elementos
console.log(pilotos)

// Removendo
pilotos.splice(3, 1) // A partir do índice 3 será removido 1 elemento
console.log(pilotos)

/**
 * Slice retorna um novo Array
 */

// Cortando o Array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// Cortando e pegando somente alguns
const algunsPilotos2 = pilotos.slice(1, 4) // Quantidade retornada é sempre n-1, ou seja, a partir do índice 1 ele pega mais 3 elementos
console.log(algunsPilotos2)