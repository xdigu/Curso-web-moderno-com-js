/**
 * Formas imperativas e declarativas de escrever um código
 * 
 * Imperativo: Você se preocupa mais em controlar todo o passo a passo
 * do código, não conseguindo reaproveitar o código a não ser para aquilo
 * 
 * Declarativo: Cria funções que retornam os dados e pode ser utilizado em
 * outro lugar, são criada funções especificas.
 */

const alunos = [{
        nome: 'Maria',
        nota: 7.9
    },
    {
        nome: 'João',
        nota: 9.2
    }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNotas = aluno => aluno.nota
const soma = (total, aluno) => total + aluno
const total2 = alunos.map(getNotas).reduce(soma)
console.log(total2 / alunos.length)