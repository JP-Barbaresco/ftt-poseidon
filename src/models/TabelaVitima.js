const db = require("../config/db/bd");

const Post = db.sequelize.define("vitimas", {
  RAI: {
    type: db.Sequelize.INTEGER(),
    validate: { isInt: true, len: [8] },
  },
  dia_semana: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  apoio: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  id_militar: {
    type: db.Sequelize.STRING(),
    validate: { max: [70] },
  },
  OBM: {
    type: db.Sequelize.STRING(),
    validate: { max: [255] },
  },
  segunda_resposta: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  data_rendicao: {
    type: db.Sequelize.DATEONLY(),
    validate: { isDate: true },
  },
  nome_vitima: {
    type: db.Sequelize.STRING(),
    validate: { max: [70] },
  },
  idade_vitima: {
    type: db.Sequelize.INTEGER(3),
    validate: { isInt: true },
  },
  sexo_vitima: {
    type: db.Sequelize.TINYINT(1),
  },
  condicao_ocorrencia: {
    type: db.Sequelize.TINYINT(1),
  },
  ingestao_alcool: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  data_submercao: {
    type: db.Sequelize.DATEONLY(),
    validate: { isDate: true },
  },
  hora_submercao: {
    type: db.Sequelize.TIME(),
  },
  ultimo_avistamento: {
    type: db.Sequelize.STRING(),
    validate: { max: [255] },
  },
  descricao_avistamento: {
    type: db.Sequelize.STRING(),
    validate: { max: [400] },
  },
  ponto_encontro: {
    type: db.Sequelize.STRING(),
    validate: { max: [255] },
  },
  descricao_encontro: {
    type: db.Sequelize.STRING(20),
    validate: { max: [20] },
  },
  tipo_local: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  tipo_predominante: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  visibilidade: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  temperatura: {
    type: db.Sequelize.INTEGER(3),
    validate: { isInt: true },
  },
  data_encontro: {
    type: db.Sequelize.DATEONLY(),
    validate: { isDate: true },
  },
  hora_encontro: {
    type: db.Sequelize.TIME(),
  },
  deslocamento: {
    type: db.Sequelize.INTEGER(10),
    validate: { isInt: true },
  },
  tempo_espera: {
    type: db.Sequelize.TIME(),
  },
  condicao_vitima: {
    type: db.Sequelize.TINYINT(),
    validate: { isInt: true, len: [1] },
  },
  relato: {
    type: db.Sequelize.STRING(),
    validate: { max: [500] },
  },
});
Post.sync({ force: false });

module.exports = Post;
