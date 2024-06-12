// Definindo a classe Livro
class Livro {
  constructor(titulo, autor, anoPublicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
  }

  // Método para exibir detalhes do livro
  exibirDetalhes() {
      console.log(`${this.titulo}, escrito por ${this.autor}
       e publicado em ${this.anoPublicacao}.`);
  }
}

// Criando uma nova instância da classe Livro
let livro1 = new Livro("O Alquimista", "Paulo Coelho", 1988);

// Exibindo detalhes do livro
livro1.exibirDetalhes(); // Saída: O Alquimista, escrito por 
//Paulo Coelho e publicado em 1988.
