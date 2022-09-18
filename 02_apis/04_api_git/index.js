const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())

app.listen(3000, function () {
    console.log("Servidor inicado")
})

app.route("/").get((req, res) =>{
    axios.get("https://api.github.com/users/hgg8ghtr15")
    .then( result => res.send(`<img src="${result.data.avatar_url}"/>`) )
    .catch(error => console.log(error))

    // return res.send("Teste")
})