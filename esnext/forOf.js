// OF acessa os valores
for (let letra of ['Ola', 'Tudo bem', 'Cod3r']) {
    console.log(letra)
}
for (let letra of 'cod3r') {
    console.log(letra)
}


// IN acessa o indice
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {
        abordado: true
    }],
    ['Set', {
        abordado: true
    }],
    ['Promisse', {
        abordado: false
    }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}