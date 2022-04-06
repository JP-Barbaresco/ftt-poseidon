const Post = require("../models/Post");
//const Joi = require('@hapi/joi')

exports.list = (_, res) => {
  Post.findAll({
    order: [["id", "DESC"]],
  }).then((posts) => res.send(posts));
};

exports.save = (req, res) => {
  Post.create({
    RAI: req.body.RAI,
    dia_semana: req.body.dia_semana,
    apoio: req.body.apoio,
    id_militar: req.body.id_militar,
    OBM: req.body.OBM,
    segunda_resposta: req.body.segunda_resposta,
    data_rendicao: req.body.data_rendicao,
    nome_vitima: req.body.nome_vitima,
    idade_vitima: req.body.idade_vitima,
    sexo_vitima: req.body.sexo_vitima,
    condicao_ocorrencia: req.body.condicao_ocorrencia,
    ingestao_alcool: req.body.ingestao_alcool,
    data_submercao: req.body.data_submercao,
    hora_submercao: req.body.hora_submercao,
    ultimo_avistamento: req.body.ultimo_avistamento,
    descricao_avistamento: req.body.descricao_avistamento,
    ponto_encontro: req.body.ponto_encontro,
    descricao_encontro: req.body.descricao_encontro,
    ponto_evidencia: req.body.ponto_evidencia,
    descricao_evidencia: req.body.descricao_evidencia,
    tipo_local: req.body.tipo_local,
    tipo_predominante: req.body.tipo_predominante,
    visibilidade: req.body.visibilidade,
    temperatura: req.body.temperatura,
    data_encontro: req.body.data_encontro,
    hora_encontro: req.body.hora_encontro,
    deslocamento: req.body.deslocamento,
    tempo_espera: req.body.tempo_espera,
    condicao_vitima: req.body.condicao_vitima,
    relato: req.body.relato,
  }).then((post) => res.send(post));
};
