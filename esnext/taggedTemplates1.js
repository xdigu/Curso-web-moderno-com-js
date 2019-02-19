// tagged templates - processa o template dentro da função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Rodrigo'
const status = 'Aprovado'
console.log(tag `aluno ${aluno} está ${status}.`)