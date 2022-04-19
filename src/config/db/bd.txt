const Sequelize = require("sequelize");
var mysql = require("mysql");

// Cria uma conexão com mysql e cria o banco caso ele não exista
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "banana123",
});
con.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
  con.query("CREATE DATABASE IF NOT EXISTS `postapp`", (err, _) => {
    if (err) throw err;
    console.log("Database ok!");
  });
});

// Conexão com o banco de dados criado
const sequelize = new Sequelize("postapp", "root", "banana123", {
  host: "localhost",
  dialect: "mysql",
  query: { raw: true },
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
