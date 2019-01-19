//Usando notação literal

const obj1 = {}
console.log(obj1)


//Objeto em JS
console.log(typeof Object, typeof new Object)


//Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.15)

console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Maria', 1600, 3)
const f2 = criarFuncionario('Joao', 1200, 6)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)