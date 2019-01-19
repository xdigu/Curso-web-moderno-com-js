/**
 * Declarações com VAR, você pode declarar a mesma variável mais de uma vez
 * no exemplo abaixo ela está no mesmo escopo, mesmo que dentro de um bloco
 * de código, na hora de imprimir o número ele pega o que foi atribuído dentro
 * do bloco de código.
 */

var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)