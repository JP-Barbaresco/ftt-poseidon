const Post = require("../models/TabelaBens");

exports.list = async (_, res) => {
  Post.findAll({
    order: [["id", "DESC"]],
  }).then((posts) => res.send(posts));
};

exports.save = async (req, res) => {
 
  const { RAI, dia_semana, apoio, id_militar, OBM, segunda_resposta, data_rendicao, bem_resgatado, 
          condicao_ocorrencia, ingestao_alcool, data_submercao, hora_submercao, ultimo_avistamento,
          descricao_avistamento, ponto_encontro, descricao_encontro, ponto_evidencia, descricao_evidencia,
          tipo_local, tipo_predominante, visibilidade, temperatura, data_encontro, hora_encontro, 
          deslocamento, relato  } = req.body
  
   await Post.create({
          RAI,
          dia_semana,
          apoio,
          id_militar,
          OBM,
          segunda_resposta,
          data_rendicao,
          bem_resgatado,
          condicao_ocorrencia,
          ingestao_alcool,
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
          deslocamento,
          relato,
  }).then((post) => res.send(post));
};
