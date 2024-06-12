// Definindo a classe
class Pessoa {
  // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(nome, idade) {
      this.nome = nome; // 'this' se refere ao objeto instanciado
      this.idade = idade;
  }

  // Um método é uma função associada a um objeto, ou, simplesmente, uma função membro de uma classe.
  falar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

// Instanciando um objeto da classe Pessoa
let pessoa1 = new Pessoa("João", 30);

// Chamando o método falar
pessoa1.falar(); // Saída: Olá, meu nome é João e eu tenho 30 anos.
