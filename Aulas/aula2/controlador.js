const readline = require('readline-sync');
const contatos = [{nome: "Jose", telefone: "9999-9999"}];
const Contato = require('./modelo');


function listar() {
    contatos.forEach(contato => 
        console.log(contato.nome, '-', contato.telefone));
    readline.question("Pressione ENTER para continuar");
}

function buscar() {
    const nome = readline.question("Informe o nome do contato");
    const buscaContato = contatos.find(contato => contato.nome === nome);
    if (buscaContato) {
        console.log(buscaContato.nome, '-', buscaContato.telefone);
    } else {
        console.log("Contato nao localizado");
    }
    readline.question("Pressione ENTER para continuar");
}

function adicionar() {
    const nome = readline.question("Informe o nome do contato: ")
    const telefone = readline.question("Infome o telefone do contato: ")
    const novo = new Contato(nome, telefone);
    contatos.push(novo);
    readline.question("Pressione ENTER para continuar");
}

function atualizar() {
    const nome = readline.question("Informe o nome do contato");
    const buscaContato = contatos.find(contato => contato.nome === nome);
    if (buscaContato) {
        const telefone = readline.question("Informe o novo telefone do contato: ");
        buscaContato.telefone = telefone;
    } else {
        console.log("Contato nao localizado");
    }
    readline.question("Pressione ENTER para continuar");
}

function remover() {
    const nome = readline.question("Informe o nome do contato");
    const posicao = contatos.findIndex(contato => contato.none === nome);
    if (posicao >=0) {
        contatos.splice(posicao, 1);
    } else {
        console.log("Contato nao localizado");
    }
    readline.question("Pressione ENTER para continuar");
}

module.exports = {listar, buscar, adicionar, atualizar, remover}