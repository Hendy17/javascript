// Função para processar a entrada de um usuário
function processarEntradaUsuario(entrada) {
  // Remove os espaços em branco do início e do final da entrada
  let entradaTratada = entrada.trim();
  
  // Exibe a entrada tratada
  console.log(`Entrada original: "${entrada}"`);
  console.log(`Entrada tratada: "${entradaTratada}"`);
}

// Exemplo de entradas de usuários
let entrada1 = "   João Silva   ";
let entrada2 = "   Maria   ";
let entrada3 = "Pedro";

// Processando as entradas
processarEntradaUsuario(entrada1);
processarEntradaUsuario(entrada2);
processarEntradaUsuario(entrada3);
