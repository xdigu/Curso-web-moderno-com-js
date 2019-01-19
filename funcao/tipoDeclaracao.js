console.log(soma(2, 3))
// console.log(sub(2,3)) só pode ser usado após a declaração da função
//console.log(mult(2,3)) só pode ser usado após a declaração da função

// function declaration 
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(2, 3))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 3))