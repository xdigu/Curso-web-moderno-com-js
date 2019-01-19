// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log (produto)

delete produto.preco
delete produto['marca do produto']
console.log (produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'RUA ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Ana',
        idade: 42
    },{
        nome: 'Junior',
        idade: 19
    }],
    calculaValorSeguro: function () {
        // ...
    }

}

console.log(carro)

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'AV Gigante'
console.log(carro)


console.log(`------`)
console.log(carro.condutores)
// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log (carro.condutores.length)
