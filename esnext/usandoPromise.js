const http = require('http')
const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''

            res.on('data', dados => {
                result += dados
            })

            res.on('end', _ => {
                try {
                    resolve(JSON.parse(result))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []

// getTurma('A')
//     .then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//         getTurma('B')
//             .then(alunos => {
//                 nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//                 getTurma('C')
//                     .then(alunos => {
//                         nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//                         console.log(nomes)
//                     })
//             })
//     })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(error => console.log(error))