const Sequelize = require("sequelize");
var mysql = require("mysql");

// Conexão com o banco de dados criado
const sequelize = new Sequelize(
  "heroku_d532412e469ab9c",
  "b3c99d3068bdb6",
  "13f1f38d",
  {
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
    query: { raw: true },
  }
);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
