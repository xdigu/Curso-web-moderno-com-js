// Operador rest(juntar), spread(espalhar)
//Usar rest com parâmetro de função

// usar Spread com objeto
const funcionario = {nome: 'Maria', salario: 1100}
const clone = {ativo: true, ...funcionario}

console.log(clone)


// usar Spread com Array
const grupoA = ['João', 'Maria', 'Pedro']
const grupoB = ['José', 'Mario', ...grupoA, 'Rafael']

console.log(grupoB)