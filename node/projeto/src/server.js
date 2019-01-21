const express = require('express')
const db = require('./dataBase')
const bodyParse = require('body-parser')
const porta = 3003

const app = express()
app.use(bodyParse.urlencoded({
    extended: true
}))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    console.log(req.params.id)
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.deleteProdutos(req.params.id)
    res.send(produto)
})

app.use((req, res, next) => {
    res.send('404')
})

app.listen(porta, _ => console.log(`Servidor iniciado na porta ${porta}`))