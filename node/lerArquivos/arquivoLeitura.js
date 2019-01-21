const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    if (err) {
        return console.log(err)
    } else {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
})

const config = require('./arquivo.json') // Neste caso o require já traz o JSON como objeto.
console.log(config.db)

fs.readdir(__dirname, (err, conteudo) => {
    return err ? err : console.log(conteudo)
})