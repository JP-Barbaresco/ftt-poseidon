const db = require("../config/db/bd");

const Usuario = db.sequelize.define("usuarios", {
    nome_guerra: {
        type: db.Sequelize.STRING(100)
    },
    RG: {
        type: db.Sequelize.STRING(11)
    },
    senha: {
        type: db.Sequelize.STRING(50)
    }
});
Usuario.sync({ force: false });

module.exports = Usuario;