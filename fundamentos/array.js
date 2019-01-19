const valores = [6.6, 7.7, 8.8, 9.9]

console.log(valores[0], valores[3])
console.log(valores[1], valores[3])
valores[10] = 4
valores[12] = 'olá'
console.log(valores)
valores.push({
    id: 3
}, 'olá pessoas', true)
console.log(valores)
console.log(valores.pop()) // Exclui ultimo elemento do array e imprime o que foi retirado.
console.log(valores)
console.log(typeof valores) // Array é um objeto.