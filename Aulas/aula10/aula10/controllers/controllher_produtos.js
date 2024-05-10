const mongoose = require('mongoose')
const Produto = require("../models/model_produtos");

async function validaDados(req, res, next) {
  const produto = new Produto(req.body);
  try {
    await produto.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados do protudo invalidos" });
  }
}

async function criar(req, res) {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
}

async function listarTodos(req, res) {
    const produtos = await Produto.find({});
    res.json({});
}

async function obter(req, res, next){
    try{
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findOne({_id: id});
    res.json(produto);
    } catch (err) {
        res.status(404).json({msg: "Produto nao encontrado"});
    }
}

module.exports = { validaDados, criar, listarTodos, obter};