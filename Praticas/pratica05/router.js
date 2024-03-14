const express = require('express');

const router = express.Router();

let produtos = [{id:1}];

router.get('/', (req, res) => {
    res.json(produtos);
});

router.get("/:produtoId", (req, res) => {
    const produtoId = req.params.produtoId;
    const produto = produtos.find(prod => prod.id === parseInt(produtoId));
    if (produto) {
        res.json(produto);
    }
    else {
        res.status(404).json({ msg: "Produto não encontrado"})
    };
});

router.post('/', (req, res) => {
    if (req.body && req.body.nome && req.body.preco) {
        const novoProduto = {
            id: produtos.length + 1,
            nome: req.body.nome,
            preco: req.body.preco
        };
        produtos.push(novoProduto);
        res.status(201).json(novoProduto);
    }
    else {
        res.status(422).json({ msg: "Nome e/ou preço do produto não informados"})
    };
});

router.put('/:produtoId', (req, res) => {
    const produtoId = req.params.produtoId;
    const produtoIndex = produtos.findIndex(prod => prod.id === parseInt(produtoId));
    if (produtoIndex !== -1) {
      produtos[produtoIndex] = {
        id: parseInt(produtoId),
        nome: req.body.nome || produtos[produtoIndex].nome,
        preco: req.body.preco || produtos[produtoIndex].preco
      };
      res.json(produtos[produtoIndex]);
    } 
    else {
      res.status(404).json({ msg: 'Produto não encontrado' });
    }
  });

  router.delete('/:produtoId', (req, res) => {
    const produtoId = req.params.produtoId;
    const produtoIndex = produtos.findIndex(prod => prod.id === parseInt(produtoId));
    if (produtoIndex !== -1) {
      produtos.splice(produtoIndex, 1);
      res.sendStatus(204);
    } else {
      res.status(404).json({ msg: 'Produto não encontrado' });
    }
  });



module.exports = router;