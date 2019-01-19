let isAtivo = false
console.log(isAtivo)


isAtivo = true
console.log(isAtivo)

isAtivo = 0
console.log(!!isAtivo)

// Tipos verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //Verifica se o valor atribuido a variavél é true ou false

// Tipos falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!'')


//Pra finalizar o OU ||
console.log(!!('' || null || 0 || ' '))

let nome1 = 'Lucas'
let nome2 = ''
console.log(!!nome1)
console.log(!!nome2)

console.log(!!nome1 || 'Nome em branco')
console.log(!!nome2 || 'Nome em branco')