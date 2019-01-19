/**
 * Nesse caso a variável sofreu um içamento e foi iniciada depois, porém isso só
 * acontece com o VAR, no LET isso gerará um erro e não içará a variável
 * 
 * Ex do que aconteceu:
 * var a
 * console.log('a =',a)
 * a = 3
 * console.log('a =',a)
 */

console.log('a =', a)
var a = 3
console.log('a =', a)

