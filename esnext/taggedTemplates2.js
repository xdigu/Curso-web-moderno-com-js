function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11

console.log(real `O proço é de ${preco} ou 3x de ${precoParcela}`)