const Post = require("../models/TabelaVitima");

exports.list = async (_, res) => {
  Post.findAll({
    order: [["id", "DESC"]],
  }).then((posts) => res.send(posts));
};

exports.save = async (req, res) => {
  
  const {RAI, dia_semana, apoio, id_militar, OBM, segunda_resposta, data_rendicao, nome_vitima, idade_vitima,
         sexo_vitima, condicao_ocorrencia, vestimenta, ingestao_alcool, data_submercao, hora_submercao, ultimo_avistamento,
         descricao_avistamento, ponto_encontro, descricao_encontro, ponto_evidencia, descricao_evidencia, tipo_local,
         tipo_predominante, visibilidade, temperatura, data_encontro, hora_encontro, deslocamento, tempo_espera, 
         condicao_vitima, relato} = req.body
  
  Post.create({
    RAI,
    dia_semana,
    apoio,
    // id_militar,
    OBM,
    segunda_resposta,
    // data_rendicao,
    nome_vitima,
    idade_vitima,
    sexo_vitima,
    condicao_ocorrencia,
    vestimenta,
    ingestao_alcool,
    sabia_nadar,
    data_submercao,
    hora_submercao,
    ultimo_avistamento,
    descricao_avistamento,
    ponto_encontro,
    descricao_encontro,
    ponto_evidencia,
    descricao_evidencia,
    tipo_local,
    tipo_predominante,
    visibilidade,
    temperatura,
    data_encontro,
    hora_encontro,
    tempo_espera,
    condicao_vitima,
    relato,
    // deslocamento,
  }).then((post) => res.send(post));
};
