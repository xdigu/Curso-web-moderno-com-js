// let possui escopo de bloco, não é acessível fora do bloco
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b)


// Template String
const produto = 'iPad'
console.log(`O produto é ${produto}`)


// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const [w, , z] = [1, 2, 3]
console.log(w, z)

const c = {idade: i, nome} = {nome: 'Ana', idade: 9}

console.log(i, nome)
console.log(c)