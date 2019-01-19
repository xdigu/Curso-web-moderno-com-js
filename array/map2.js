const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços com map
const criaObjeto = e => JSON.parse(e)
const getPreco = e => e.preco

const resultado = carrinho.map(criaObjeto).map(getPreco)

console.log(resultado)