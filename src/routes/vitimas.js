const express = require("Express");
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

module.exports = router;
