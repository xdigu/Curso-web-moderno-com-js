/*
 * Variaveis que são declaradas com let 
 * não conseguem ser declaradas novamente
 * somente alterar o valor
 */

var a = 3
let b = 4
var a = 30
//let b = 40
b = 40
console.log(a, b)

/*
 * Constante além de declarada uma unica vez,
 * o valor não pode ser alterado
 */

const c = 5
// c = 50
console.log(c)