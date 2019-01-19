const name = 'Rodrigo'
const concatenacao = 'olá ' + name + '!'
const template = `
    olá
    ${name}!
`
console.log(concatenacao, template)

// Expressões 
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei ... ${up('cuidado')}!`)