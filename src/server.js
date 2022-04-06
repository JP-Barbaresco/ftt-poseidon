const express = require("express")
const app = express()
//import rateLimit from 'express-rate-limit'

// Configuração do serializador/desserializador
const bodyParser = require('body-parser')
const router = require("./routes/postagem")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Inclui as rotas no servidor
app.use(router)

// Evita que o servidor caia quando derem o input errado
process.on('uncaughtException', err => {
    console.error(err && err.stack)
});

// Inicializando servidor
app.listen(8081, () => console.log("Server running on port 8081..."))

console.log("Hello My World!")