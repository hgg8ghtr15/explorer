// const { request } = require('express');
const { application } = require('express');
const express = require('express')

const app = express();

app.listen("3000")

let autor = "fabio"

// midware
app.use(express.json())

app.route("/").get((req, res)=> {
    res.send("Hello World!")
})

app.route("/sobre").get((req, res)=> {
    res.send(autor)
})

app.route("/sobre").post((req, res)=> {
    console.log(req.body);
    return res.send(req.body)
})

app.route("/sobre").put((req, res)=> {
    autor = req.body.autor
    console.log(autor)
    res.send("atualiado!")
})

app.route("/sobre/:id").delete( (req, res)=> {
    autor = ""
    res.send(req.params.id)
})
