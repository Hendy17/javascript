// Função para processar um array de entradas de usuários
function processarEntradasUsuarios(entradas) {
  return entradas.map(entrada => entrada.trim());
}

// Exemplo de uso
let entradasUsuarios = ["   João Silva   ", "   Maria   ", "Pedro"];
let entradasTratadas = processarEntradasUsuarios(entradasUsuarios);

console.log("Entradas Originais:", entradasUsuarios);
console.log("Entradas Tratadas:", entradasTratadas);
