function getInteiroAleatorio(min = -1, max = 100) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}

