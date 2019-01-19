// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'
const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}KM/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: 'V40',

    // Shadowing do status + chamando a propria função
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(volvo, carro)
Object.setPrototypeOf(ferrari, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(280)
console.log(ferrari.status())

volvo.acelerarMais(150)
console.log(volvo.status())