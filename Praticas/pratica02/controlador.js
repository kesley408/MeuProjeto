const contato = require("./modelo")
const contatos =[]

function adicionarContatos (nome, email, telefone) {
   const novoContato = new contato(nome, email, telefone);
   contatos.push(novoContato);
}

function listarContatos () {
    return contatos
}

function buscarContato (nome) {
    return contatos.find(contato => contato.nome === nome);
}

function atualizarContato(nome, email, telefone) {
    const contatoEncontrado = buscarContato(nome);
    if (contatoEncontrado) {
        contatoEncontrado.email = email;
        contatoEncontrado.telefone = telefone;
    }
}

function removerContato(nome) {
    const index = contatos.findIndex(contato => contato.nome === nome);
    if (index !== -1) {
        contatos.splice(index, 1);
    }
}

module.exports = {adicionarContatos, listarContatos, buscarContato, atualizarContato, removerContato};