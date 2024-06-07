// Função para combinar múltiplas listas de itens
function combinarListas(...listas) {
  return listas.reduce((acc, lista) => acc.concat(lista), []);
}

// Exemplo de uso da função
const lista1 = [1, 2, 3];
const lista2 = [4, 5];
const lista3 = [6, 7, 8];

const listaCombinada = combinarListas(lista1, lista2, lista3);
console.log(listaCombinada);  // [1, 2, 3, 4, 5, 6, 7, 8]
