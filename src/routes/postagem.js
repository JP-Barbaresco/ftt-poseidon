const express = require("Express")
const router = express.Router()

// Rotas
var postagemController = require('../controller/postagemController')
router.route('/postagens')
    .get((req, res) => postagemController.list(req, res))
    .post((req, res) => postagemController.save(req, res))

module.exports = router