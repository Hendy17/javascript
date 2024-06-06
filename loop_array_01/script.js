const pedidos = [
  {
    id: 1,
    itens: [
      { nome: "Camisa", preco: 20, quantidade: 2 },
      { nome: "Calça", preco: 50, quantidade: 1 }
    ],
    status: "pendente"
  },
  {
    id: 2,
    itens: [
      { nome: "Sapato", preco: 100, quantidade: 1 },
      { nome: "Meias", preco: 5, quantidade: 5 }
    ],
    status: "pendente"
  }
];

// Função para calcular o total de um pedido
function calcularTotal(itens) {
  let total = 0;
  for (let item of itens) {
    total += item.preco * item.quantidade;
  }
  return total;
}

// Processando os pedidos
for (let pedido of pedidos) {
  // Calcula o total do pedido
  const total = calcularTotal(pedido.itens);
  
  // Atualiza o status do pedido
  pedido.status = "processado";
  
  // Exibe o resultado
  console.log(`Pedido ID: ${pedido.id}, Total: $${total}, Status: ${pedido.status}`);
}
