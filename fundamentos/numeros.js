const peso1 = 1.0
const peso2 = Number('1.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.87165
const avaliacao2 = 6.65876

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Exibe somente 2 casas decimais
console.log(media.toString(2)) // Converte em binário
console.log(typeof media) // Mostra o tipo da váriavel