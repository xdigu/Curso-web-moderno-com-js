/**
 * Object.preventExtensions => Você consegue alterar valor do atributo, excluir atributos porém não consegue criar novos atributos
 */

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))
console.log(produto)

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag

console.log(produto)

/**
 * Object.seal => Sela o objeto, você só pode alterar os valores e não pode excluir nem adicionar um novo
 */

const pessoa = {
    nome: 'Rodrigo',
    idade: 26
}

console.log(Object.isSealed(pessoa))
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

pessoa.endereco = 'rua x'
delete pessoa.idade

pessoa.idade = 27

console.log(pessoa)

 /**
  * Object.freeze  => Congela o objeto, você não pode alterar nada do mesmo
  */