// Lista de permissões do usuário
const permissoes = ["leitura", "escrita", "execução"];

// Função para verificar se o usuário tem uma permissão específica
function temPermissao(permissao) {
  if (permissoes.includes(permissao)) {
    console.log(`Usuário tem permissão de ${permissao}.`);
  } else {
    console.log(`Usuário não tem permissão de ${permissao}.`);
  }
}

// Verificando permissões
temPermissao("leitura");   // Usuário tem permissão de leitura.
temPermissao("admin");     // Usuário não tem permissão de admin.
