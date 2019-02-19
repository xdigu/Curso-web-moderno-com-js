function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

// Para receber o resolve = .then() para reject = .catch()
falarDepoisDe(3, 'Ola')
    .then(frase => frase.concat(' tudo bom?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(erro => console.log(erro))