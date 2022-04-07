const express = require("express");
const app = express();

// Configuração do serializador/desserializador
const bodyParser = require("body-parser");
const router = require("./routes/postagem");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Inclui as rotas no servidor
app.use(router);

// Limita a quantidade de Requests
const rateLimit = require("express-rate-limit");
const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", rateLimiter);

// Evita que o servidor caia quando derem o input errado
process.on("uncaughtException", (err) => {
  console.error(err && err.stack);
});

// Inicializando servidor
app.listen(8081, () => console.log("Server running on port 8081..."));
