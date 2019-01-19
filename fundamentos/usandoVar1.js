/**
 * Uma variável quando definida dentro de um bloco de código 
 * consegue ser visível em qualquer lugar
 */


{
    {
        var sera = 'será?'
        console.log(sera)
    }
}
console.log(sera)

/**
 * O mesmo não ocorre dentro de uma função, variáveis
 * que são definidas na função podem somente ser 
 * acessíveis dentro da própria função
 */

function test() {
    var ola = 'olá'
    console.log(ola)
}

test()
console.log(ola)