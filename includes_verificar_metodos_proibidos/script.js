// Lista de itens proibidos
const itensProibidos = ["álcool", "tabaco", "drogas"];

// Função para verificar se um item é proibido
function verificarItemProibido(item) {
  if (itensProibidos.includes(item.toLowerCase())) {
    console.log(`O item "${item}" é proibido.`);
  } else {
    console.log(`O item "${item}" é permitido.`);
  }
}

// Verificando itens
verificarItemProibido("Álcool");  // O item "Álcool" é proibido.
verificarItemProibido("Café");    // O item "Café" é permitido.
