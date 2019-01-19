class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: (_) => console.log(`Meu nome é ${nome}`)

    }
}

const p2 = criarPessoa ('Jose')
p2.falar()