function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com " + nota)

    }
}

soBoaNoticia(9.1)
soBoaNoticia(6.1)

function seForVerdade(valor) {
    if (valor) {
        console.log("É verdade ..." + valor)

    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade(0)
seForVerdade('')
seForVerdade(-1)
seForVerdade(1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})