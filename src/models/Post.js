const db = require("../config/db/bd");

const Post = db.sequelize.define("postagens", {
  RAI: {
    type: db.Sequelize.INTEGER(8),
  },
  dia_semana: {
    type: db.Sequelize.TINYINT(1),
  },
  apoio: {
    type: db.Sequelize.TINYINT(1),
  },
  id_militar: {
    type: db.Sequelize.BIGINT(20),
  },
  OBM: {
    type: db.Sequelize.TEXT("tiny"),
  },
  segunda_resposta: {
    type: db.Sequelize.TINYINT(1),
  },
  data_redicao: {
    type: db.Sequelize.DATEONLY(),
  },
  nome_vitima: {
    type: db.Sequelize.STRING(70),
  },
  idade_vitima: {
    type: db.Sequelize.INTEGER(3),
  },
  sexo_vitima: {
    type: db.Sequelize.TINYINT(1),
  },
  condicao_ocorrencia: {
    type: db.Sequelize.TINYINT(1),
  },
  ingestao_alcool: {
    type: db.Sequelize.TINYINT(1),
  },
  data_submercao: {
    type: db.Sequelize.DATEONLY(),
  },
  hora_submercao: {
    type: db.Sequelize.TIME(),
  },
  ultimo_avistamento: {
    type: db.Sequelize.STRING(250),
  },
  descricao_avistamento: {
    type: db.Sequelize.TEXT("tiny"),
  },
  ponto_encontro: {
    type: db.Sequelize.STRING(250),
  },
  descricao_encontro: {
    type: db.Sequelize.TEXT("tiny"),
  },
  ponto_evidencia: {
    type: db.Sequelize.STRING(250),
  },
  descricao_evidencia: {
    type: db.Sequelize.TEXT("tiny"),
  },
  tipo_local: {
    type: db.Sequelize.TINYINT(1),
  },
  tipo_predominante: {
    type: db.Sequelize.TINYINT(1),
  },
  visibilidade: {
    type: db.Sequelize.TINYINT(1),
  },
  temperatura: {
    type: db.Sequelize.INTEGER(2),
  },
  data_encontro: {
    type: db.Sequelize.DATEONLY(),
  },
  hora_encontro: {
    type: db.Sequelize.TIME(),
  },
  deslocamento: {
    type: db.Sequelize.INTEGER(3),
  },
  tempo_espera: {
    type: db.Sequelize.TIME(),
  },
  condicao_vitima: {
    type: db.Sequelize.TINYINT(1),
  },
  relato: {
    type: db.Sequelize.STRING(500),
  },
});
Post.sync({ force: false });

module.exports = Post;
