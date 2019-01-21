const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/**
 * Retornar a mulher chinesa com menor salário
 */

const chinesas = f => f.pais === 'China'
const mulheres = p => p.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // Mulher chinesa com menor salario
    const func = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})