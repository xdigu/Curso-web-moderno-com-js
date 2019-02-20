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



let obterAlunos = async _ => {
    let ta = await getTurma('A')
    let tb = await getTurma('B')
    let tc = await getTurma('C')

    return [].concat(ta, tb, tc)
}

obterAlunos()
    .then(listaAlunos => listaAlunos.map(alunos => alunos.nome))
    .then(alunos => console.log(alunos))