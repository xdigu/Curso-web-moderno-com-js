let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2*a // retorno é implícito

console.log (dobro(3))
console.log (dobro(Math.PI))


ola = () => 'ola'
ola = _ => 'ola'

console.log (ola())

///teste
_ => {
    'ola'
}