const notas = [6.7,7.4,9.8,8.1,7.7]

for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobreNome: 'Antunes',
    idade: '58',
    peso: 64
}

for (atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
    
}