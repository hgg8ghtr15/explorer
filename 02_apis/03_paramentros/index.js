// const { request } = require('express')
const express = require('express')

const app = express()

// middleware
app.use(express.json())

app.listen(3000)

app.route("/").get((req, res) => { res.send("Sucesso")})

//body
app.route("/usuario").post((req, res) => {
    const {nome, cidade, livros} = req.body
    console.log(nome, cidade, livros)
    // console.log(req.body)
    return res.send("Sucesso")
})

//parrams
app.route("/usuario/:id").post((req, res) => {
    const id = req.params.id
    return res.send(`Ido ${id}`)
})

//query params
app.route("/usuario").get( (req, res) => {
    const {nome, cidade} = req.query
    console.log(nome,cidade)
    return res.send(req.query)
})
