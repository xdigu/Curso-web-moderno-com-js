// Arrow function
const soma = (a, b) => a + b
console.log(soma(1, 2))

// Arrou function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametros default
function log(texto = 'Padrão') {
    console.log(texto)
}

log()
log('Altera texto')


// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))