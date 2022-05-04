import jwt from 'jsonwebtoken';
const Usuario = require("../models/Usuario");

exports.login = (req, res) => {
    const usuario = await Usuario.findOne({ where : {
        email: req.body.email
        }
    }).then(() => {
        if(req.body.email == usuario.email && req.body.senha == usuario.senha){
            token = jwt.sign({id_usuario : usuario.id}, "teste6235", {expiresIn: 1000} ) // (atributos, chave, tempo que o token expira em ms)
            return res.json({ autenticacao: true, token })
        }
        else{
            res.json({erro: "Email ou senha incorretos"})
        }
    })
      .catch(() => {
        res.json({erro: "Email não cadastrado!"})
      })
}
