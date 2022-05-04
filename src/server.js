const express = require("express");
const app = express();

// Configuração do serializador/desserializador
const bodyParser = require("body-parser");
const router = require("./routes/formRoutes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Inclui as rotas no servidor
app.use(router);

// Evita que o servidor caia quando derem o input errado
process.on("uncaughtException", (err) => {
  console.error(err && err.stack);
});

// Inicializando servidor
const port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number, () => console.log("Server running on port 3000..."));
