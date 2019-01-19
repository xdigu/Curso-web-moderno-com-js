const escola = 'cod3r'

console.log(escola.charAt(4)) // Mostra qual a letra na posição 4
console.log(escola.charAt(5)) // Mostra qual a letra na posição 5
console.log(escola.charCodeAt(3)) // Mostra na tabela asc a letra na posição 3
console.log(escola.indexOf('c')) // Mostra qual o indice da letra c
console.log(escola.substring(0, 3)) // Monta uma string começando do indice 0 e pegando 3 posições
console.log('escola '.concat(escola).concat('@') + '!') // Concatena
console.log('escola ' + escola.concat('@')) // Concatena
console.log(escola.replace(3, 'e')) // Troca tudo que for 3 pela letra E
console.log('ana,maria,pedro'.split(',')) // Cria um array com o deliminador ,