/**
 * Node faz cache, para evitar isso temos que criar uma factory assim com em instanciaNova.js
 */

const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)
console.log(contadorB.valor)

contadorC.inc()
console.log(contadorC.valor, contadorD.valor)