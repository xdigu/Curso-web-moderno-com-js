/**
 * Let deixa a variável visível somente para o escopo, 
 * caso você tente imprimir uma váriavel forá do bloco de código
 * que foi definida dentro do bloco, dará erro.
 */

var numero = 1

{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)