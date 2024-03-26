let produtos = [];

function listarTodos(req, res) {
    res.json(produtos);
  }
  
  function buscarPeloId(req, res) {
    const produto = produtos.find(produto => produto.id === parseInt(req.params.produtoId));
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ msg: "Produto não encontrado" });
    }
  }

  function criar(req, res) {
    if (req.body.nome && req.body.preco) {
      const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
      };
      produtos.push(novoProduto);
      res.status(201).json(novoProduto);
    } else {
      res.status(422).json({ msg: "Nome e/ou preço do produto não informados" });
    }
  }

  function atualizar(req, res) {
    const produtoIndex = produtos.findIndex(produto => produto.id === parseInt(req.params.produtoId));
    if (produtoIndex !== -1) {
      produtos[produtoIndex] = {
        id: produtos[produtoIndex].id,
        nome: req.body.nome || produtos[produtoIndex].nome,
        preco: req.body.preco || produtos[produtoIndex].preco
      };
      res.json(produtos[produtoIndex]);
    } else {
      res.status(404).json({ msg: "Produto não encontrado" });
    }
  }

  function remover(req, res) {
    const produtoIndex = produtos.findIndex(produto => produto.id === parseInt(req.params.produtoId));
    if (produtoIndex !== -1) {
      produtos.splice(produtoIndex, 1);
      res.sendStatus(204);
    } else {
      res.status(404).json({ msg: "Produto não encontrado" });
    }
  }

  module.exports = {listarTodos, buscarPeloId, criar, atualizar, remover};