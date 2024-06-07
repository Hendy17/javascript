// Função para gerar um separador visual
function gerarSeparador(largura) {
  return '-'.repeat(largura);
}

// Exemplo de uso da função
let separadorPequeno = gerarSeparador(10);
let separadorGrande = gerarSeparador(30);

console.log(separadorPequeno);  // ----------
console.log(separadorGrande);   // ------------------------------
