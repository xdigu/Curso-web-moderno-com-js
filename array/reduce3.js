/**
 * Implementação básica do reduce
 */

Array.prototype.reduce2 = function (callback, valorInicial) {
    let indiceInicial = valorInicial ? 0 : 1
    let acumulados = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulados = callback(acumulados, this[i], i, this)
    }
    return acumulados
}

const nums = [1, 2, 3, 4, 5, 6]
const soma = (total, valor) => total + valor

console.log(nums.reduce2(soma, 10))