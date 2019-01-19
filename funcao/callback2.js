
// Sem callback
const notas = [7.5, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback

let notasBaixas2 = []

notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)