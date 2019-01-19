/**
 * Como o LET não é uma variável de escopo, você não consegue
 * ver ela fora do bloco.
 */

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)