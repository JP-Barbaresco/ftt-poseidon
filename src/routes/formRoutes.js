const express = require("express");
const router = express.Router();

// Limita a quantidade de Requests
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
router.use(limiter);

// Rotas
var postagemController = require("../controller/vitimasController");
router
  .route("/vitimas")
  .get((req, res) => postagemController.list(req, res))
  .post((req, res) => postagemController.save(req, res));
//.put((req, res) => postagemController.save(req, res));

var bensController = require("../controller/bensController");
router
  .route("/bens")
  .get((req, res) => bensController.list(req, res))
  .post((req, res) => bensController.save(req, res));
//.put((req, res) => bensController.save(req, res));

module.exports = router;
