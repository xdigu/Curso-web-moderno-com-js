const escola = [{
        nome: 'Turma 1',
        alunos: [{
                nome: 'Ana',
                nota: 8.7
            },
            {
                nome: 'Maria',
                nota: 5
            }
        ]
    },
    {
        nome: 'Turma 2',
        alunos: [{
                nome: 'Rebeca',
                nota: 8.9
            },
            {
                nome: 'Roberto',
                nota: 7.3
            }
        ]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)
console.log([].concat([8.7, 5], [8.9, 7.3]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)