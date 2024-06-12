// Definindo a função construtora Livro
function Livro(titulo, autor, anoPublicacao) {
  this.titulo = titulo;
  this.autor = autor;
  this.anoPublicacao = anoPublicacao;
}

// Adicionando o método exibirDetalhes ao protótipo de Livro
Livro.prototype.exibirDetalhes = function() {
  console.log(`${this.titulo}, escrito por ${this.autor} e publicado em ${this.anoPublicacao}.`);
}

// Criando uma nova instância da função construtora Livro
let livro1 = new Livro("O Alquimista", "Paulo Coelho", 1988);

// Exibindo detalhes do livro
livro1.exibirDetalhes(); // Saída: O Alquimista, escrito por Paulo Coelho e publicado em 1988.
