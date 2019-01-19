/**
 * Como o var não é uma variável de escopo, mesmo após o FOR
 * você consegue acessala globalmente
 */

for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)