// Lista de produtos
let produtos = [
  "Camisa", "Calça", "Sapato", "Meias", "Boné", 
  "Jaqueta", "Relógio", "Cinto", "Bermuda", "Óculos"
];

// Função para obter produtos para uma página específica
function obterProdutosPagina(produtos, pagina, itensPorPagina) {
  let inicio = (pagina - 1) * itensPorPagina;
  let fim = inicio + itensPorPagina;
  return produtos.slice(inicio, fim);
}

// Exibindo produtos da página 1 com 3 itens por página
let pagina1 = obterProdutosPagina(produtos, 1, 3);
console.log("Página 1:", pagina1);

// Exibindo produtos da página 2 com 3 itens por página
let pagina2 = obterProdutosPagina(produtos, 2, 3);
console.log("Página 2:", pagina2);

// Exibindo produtos da página 3 com 3 itens por página
let pagina3 = obterProdutosPagina(produtos, 3, 3);
console.log("Página 3:", pagina3);
