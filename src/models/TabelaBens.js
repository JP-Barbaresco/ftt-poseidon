const db = require("../config/db/bd");
const Post = db.sequelize.define("bens", {
    RAI: {
      type: db.Sequelize.INTEGER(), 
      validate: {isInt: true, len: [8]}
    },
    dia_semana: {
      type: db.Sequelize.TINYINT(), 
      validate: {isInt: true, len: [1]}
    },
    apoio: {
      type: db.Sequelize.TINYINT(), 
      validate: {isInt: true, len: [1]}
    },
    id_militar: {
      type: db.Sequelize.STRING(),
      validate: {max: [70]}
    },
    OBM: {
      type: db.Sequelize.STRING(), 
      validate: {max: [255]}
    },
    segunda_resposta: {
      type: db.Sequelize.TINYINT(),
      validate: {isInt: true, len: [1]}
    },
    data_rendicao: {
      type: db.Sequelize.DATEONLY(),
      validate: {isDate: true}
    },
    bem_resgatado: {
      type: db.Sequelize.STRING(),
      validate: {max: [200]}
    },
    condicao_ocorrencia: {
      type: db.Sequelize.TINYINT(),
      validate: {isInt: true, len: [1]}
    },
    ingestao_alcool: {
      type: db.Sequelize.TINYINT(),
      validate: {isInt: true, len: [1]}
    },
    data_submercao: {
      type: db.Sequelize.DATEONLY(),
      validate: {isDate: true}
    },
    hora_submercao: {
      type: db.Sequelize.TIME(),
    },
    ultimo_avistamento: {
      type: db.Sequelize.STRING(),
      validate: {max: [255]}
    },
    descricao_avistamento: {
      type: db.Sequelize.STRING(), 
      validate: {max: [400]}
    },
    ponto_encontro: {
      type: db.Sequelize.STRING(),
      validate: {max: [255]}
    },
    descricao_encontro: {
      type: db.Sequelize.STRING(), 
      validate: {max: [400]}
    },
    ponto_evidencia: {
      type: db.Sequelize.STRING(), 
      validate: {max: [255]}
    },
    descricao_evidencia: {
      type: db.Sequelize.STRING(), 
      validate: {max: [400]}
    },
    tipo_local: {
      type: db.Sequelize.TINYINT(),
      validate: {isInt: true, len: [1]}
    },
    tipo_predominante: {
      type: db.Sequelize.TINYINT(),
      validate: {isInt: true, len: [1]}
    },
    visibilidade: {
      type: db.Sequelize.TINYINT(),
      validate: {isInt: true, len: [1]}
    },
    temperatura: {
      type: db.Sequelize.INTEGER(3),
      validate: {isInt: true}
    },
    data_encontro: {
      type: db.Sequelize.DATEONLY(),
      validate: {isDate: true}
    },
    hora_encontro: {
      type: db.Sequelize.TIME()
    },
    deslocamento: {
      type: db.Sequelize.INTEGER(10),
      validate: {isInt: true}
    },
    relato: {
      type: db.Sequelize.STRING(), 
      validate: {max: [500]}
    }
  });
  Post.sync({ force: false });

module.exports = Post;
