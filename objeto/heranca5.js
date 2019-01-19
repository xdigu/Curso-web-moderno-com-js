console.log (typeof String)
console.log (typeof Array)
console.log (typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Rodrigo'.reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1,'b',3].first())