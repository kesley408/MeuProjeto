const express = require('express');
const controllerProdutos = require('../controllers/controller_produtos');
const router = express.router();

router.get('/produtos', async (req, res) => {
});

router.get('/produtos', async (req, res) => {
    const produtos = await controllerProdutos.listarTodos();
    res.json(produtos);
});

router.get('/produtos/:produtoId', async (req, res) => {
});

router.get('/produtos/:produtoId', async (req, res) => {
    const produto = await controllerProdutos.buscarPeloId(req.params.produtoId);
    res.json(produto);
});

router.post('/produtos', async (req, res) => {
});

router.post('/produtos', async (req, res) => {
    const novoProduto = await controllerProdutos.criar(req.body);
    res.status(201).json(novoProduto);
});

router.put('/produtos/:produtoId', async (req, res) => {
});

router.put('/produtos/:produtoId', async (req, res) => {
    const produtoAtualizado = await controllerProdutos.atualizar(req.params.produtoId, req.body);
    res.json(produtoAtualizado);
});

router.delete('/produtos/:produtoId', async (req, res) => {
});

router.delete('/produtos/:produtoId', async (req, res) => {
    await controllerProdutos.remover(req.params.produtoId);
    res.sendStatus(204);
});

module.exports = router;
