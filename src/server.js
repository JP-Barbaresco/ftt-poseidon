const express = require("express")
const app = express()

// Configuração do serializador/desserializador
const bodyParser = require('body-parser')
const router = require("./routes/postagem")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Inclui as rotas no servidor
app.use(router)

// Inicializando servidor
app.listen(8081, () => console.log("Server running on port 8081..."))
