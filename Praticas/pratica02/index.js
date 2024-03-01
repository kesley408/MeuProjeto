const readline = require("readline-sync")
const contatoControlador = require("./controlador")

function menu() {
    console.log('1. Adicionar Contato');
    console.log('2. Listar Contato');
    console.log('3. Buscar Contato');
    console.log('4. Atualizar Contato');
    console.log('5. Remover Contato');
    console.log('6. Sair');
}

function escolherOpcao(opcao) {
    switch (opcao) {
      case '1':
        const nome1 = readline.question('Digite o nome do contato: ');
        const email1 = readline.question('Digite o email do contato: ');
        const telefone1 = readline.question('Digite o telefone do contato: ');
        contatoControlador.adicionarContatos(nome1, email1, telefone1);
        break;
      case '2':
        const contatos2 = contatoControlador.listarContatos();
        contatos2.forEach(contato => {
          console.log('Nome:', contato.nome);
          console.log('Email:', contato.email);
          console.log('Telefone:', contato.telefone);
          console.log('---');
        });
        break;
      case '3':
        const nome3 = readline.question('Digite o nome do contato: ');
        const contatoEncontrado3 = contatoControlador.buscarContato(nome3);
        if (contatoEncontrado3) {
          console.log('Nome:', contatoEncontrado3.nome);
          console.log('Email:', contatoEncontrado3.email);
          console.log('Telefone:', contatoEncontrado3.telefone);
        } else {
          console.log('Contato não encontrado.');
        }
        break;
      case '4':
        const nome4 = readline.question('Digite o nome do contato: ');
        const email4 = readline.question('Digite o email do contato: ');
        const telefone4 = readline.question('Digite o telefone do contato: ');
        contatoControlador.atualizarContato(nome4, email4, telefone4);
        break;
      case '5':
        const nome5 = readline.question('Digite o nome do contato: ');
        contatoControlador.removerContato(nome5);
        break;
      case '6':
        console.log('Saindo...');
        process.exit(0);
        break;
      default:
        console.log('Opção inválida.');
    }
  }
  
  function main() {
    while (true) {
      menu();
      const opcao = readline.question('Escolha uma opção: ');
      escolherOpcao(opcao);
    }
  }
  
  main();
