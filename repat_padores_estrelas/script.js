// Função para criar um padrão de estrelas
function criarPadraoEstrelas(linhas) {
  for (let i = 1; i <= linhas; i++) {
    console.log('*'.repeat(i));
  }
}

// Exemplo de uso da função
criarPadraoEstrelas(5);

// Saída:
// *
// **
// ***
// ****
// *****
