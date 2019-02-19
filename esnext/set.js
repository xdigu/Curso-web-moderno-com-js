// Não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Julia', 'Flavio', 'Adriano', 'Julia']


const nomesSet = new Set(nomes)
console.log(nomesSet)


