class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome = 'Silva', profissao = 'TI') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super()
        this.falar = function () {
            console.log('Pertenço a fámilia ', this.sobrenome, ' e trabalho com ', this.profissao)
        }
    }
}

const filho = new Filho

filho.falar()
console.log(filho)