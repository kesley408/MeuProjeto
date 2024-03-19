const express = require('express');

const produtosController = require('../controllers/controller_produtos');

const router = express.Router();

router.get("/", produtosController.listarTodos);

router.get("/:produtosId", produtosController.buscarPeloId, produtosController.exibir);

router.post("/", produtosController.criar);

router.put("/:produtoId", produtosController.buscarPeloId, produtosController.atualizar);

router.delete("/:produtoId", produtosController.remover, produtosController.remover);

module.exports = router;