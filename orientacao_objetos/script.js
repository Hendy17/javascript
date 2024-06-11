// Definição da classe Pessoa
class Pessoa {
  // Construtor para inicializar os atributos
  constructor(nome, idade) {
    this.nome = nome; // Atributo nome
    this.idade = idade; // Atributo idade
  }

  // Método para apresentar a pessoa
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

// Criação de objetos da classe Pessoa
const pessoa1 = new Pessoa('Ana', 30);
const pessoa2 = new Pessoa('Carlos', 25);

// Usando o método apresentar dos objetos
pessoa1.apresentar(); // Olá, meu nome é Ana e eu tenho 30 anos.
pessoa2.apresentar(); // Olá, meu nome é Carlos e eu tenho 25 anos.
