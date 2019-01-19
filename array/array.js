console.log(typeof Array)

let a = new Array('rodrigo', 'franca', 'jorge')

console.log(a)
console.log(a[2])

a = [5, 4, 3, 2, 1]
console.log(a)
console.log(a[10])

a[9] = 10
console.log(a)

a.push(11)
console.log(a.length)
console.log(a)

a.sort()
console.log(a)

delete a[1]
console.log(a)

a = ['Ana', 'Bia', 'Carlos']
console.log(a)
// a.splice(1,1)
// console.log(a)

// a.splice(1, 1, 'elemento 1', 'elemento 2')
// console.log(a)

a.splice(1, 0, 'elemento 1', 'elemento 2')
console.log(a)