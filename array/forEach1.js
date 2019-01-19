const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(indice, nome)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = nome => console.log('a', nome)

aprovados.forEach(exibirAprovados)