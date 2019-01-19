/**
 * Função em JS é First-Class Object
 * High-Order Function
 */


// Criar de forma literal
function func1() {}


// Armazenar em variável
const func2 = function () {}


// Armazenar em array
const array = [function (a, b) {
    return a + b
}, func1(), func2()]
console.log(array[0](2, 3))


// Armazenar em um Objeto
const obj = {}
obj.somar = function (a, b) {
    return a + b
}

console.log(obj.somar(1, 3))


// Passar função como Parametro
function run(fun) {
    fun()
}

run(function () {
    return console.log('Hello')
})


// Uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)   
const somaTres = soma(1,2)
somaTres(3)