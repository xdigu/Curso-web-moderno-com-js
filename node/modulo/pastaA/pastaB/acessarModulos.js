/**
 * Para importar modulos em diretório anterior basta adicionar ../
 */
const moduloA = require('../../moduloA')
const saudacao = require('saudacao')
const http = require('http')
const ola2 = require('./pastaC')

console.log(moduloA.bemvindo)
console.log(saudacao.ola)
console.log(ola2)


// Cria um server HTTP
http.createServer((req, res) => {
    res.write(ola2.ola2)
    res.end()
}).listen(8080)