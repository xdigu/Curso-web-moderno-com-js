// Factory function

function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.05
    };
}
prod1 = criarProduto('lapis', 3.6);
console.log(prod1)



function criarProduto2(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.05
    };
}
prod2 = criarProduto2('caderno', (35.5 + 0.5))
console.log(prod2)