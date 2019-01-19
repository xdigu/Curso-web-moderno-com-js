const alunos = [{
        nome: 'João',
        nota: 7.3,
        bolsista: true
    },
    {
        nome: 'Maria',
        nota: 9.2,
        bolsista: true
    },
    {
        nome: 'Pedro',
        nota: 9.8,
        bolsista: false
    },
    {
        nome: 'Ana',
        nota: 8.7,
        bolsista: true
    }
]


const resultado = alunos.map(a => a.nota)
console.log(resultado)

console.log(resultado.reduce(function (acumulado, atual) {
    console.log(acumulado, atual)
    return acumulado + atual
}, 10))


const somarComReduce = (acumulado, atual) => acumulado + atual

console.log(resultado.reduce(somarComReduce))
console.log(resultado.reduce(somarComReduce, 15)) // Adiciona 15 ao valor acumulado para iniciar a soma