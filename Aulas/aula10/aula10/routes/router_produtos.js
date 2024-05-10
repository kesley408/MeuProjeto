const express = require("express");

const controllerProdutos = require("../controllers/controllher_produtos");

const router = express.Router();

router.post("/", controllerProdutos.validaDados,
 controllerProdutos.criar);

router.get("/", controllerProdutos.listarTodos);

router.get("/:id", controllerProdutos.obter);

module.exports = router;
