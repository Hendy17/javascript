// Função para gerar um título repetido
function gerarTitulo(titulo, repeticoes) {
  return `${titulo} `.repeat(repeticoes).trim();
}

// Exemplo de uso da função
let tituloRepetido = gerarTitulo("Promoção", 5);

console.log(tituloRepetido);  // Promoção Promoção Promoção Promoção Promoção
