// Definindo a classe Carrinho
class Carrinho {
  // O construtor é chamado quando um novo objeto Carrinho é criado
  constructor(itens, quatiadeTotal, valorTotal) {
    this.itens = itens; // Array de itens no carrinho
    this.quatiadeTotal = quatiadeTotal; // Quantidade total de itens no carrinho
    this.valorTotal = valorTotal; // Valor total do carrinho
  }

  // Método para adicionar um item ao carrinho
  addItem(item) {
    let contador = 0; // Contador para verificar se o item já existe no carrinho

    // Loop através de cada item no carrinho
    for(let itemCarrinho in this.itens) {
      // Se o item já existe no carrinho
      if(this.itens[itemCarrinho].id == item.id) {
        // Aumenta a quantidade total do item no carrinho
        this.itens[itemCarrinho].quatiadeTotal += item.quatiadeTotal;
        contador = 1; // Atualiza o contador para indicar que o item já existe
      }
    }

    // Se o contador ainda for 0 após o loop, significa que o item não existe no carrinho
    if(contador == 0) {
      // Então, adicionamos o item ao carrinho
      this.itens.push(item);
    }
  }
}

// Criando um novo objeto Carrinho
let carrinho = new Carrinho([
  {
    id: 1,
    nome: "Camisa",
    quatiadeTotal: 20,
    preco: 50,
  },
  {
    id: 2,
    nome: "Meia",
    quatiadeTotal: 10,
    preco: 5,
  }
], 30, 55); // Passando os itens, a quantidade total e o valor total para o construtor
