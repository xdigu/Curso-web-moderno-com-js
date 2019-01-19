function getValorInteiro(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do {
    opcao = getValorInteiro(-1, 10)
    console.log(opcao)
} while (opcao != -1)

