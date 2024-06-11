// Definição da classe Estudante que herda de Pessoa
class Estudante extends Pessoa {
  // Construtor para inicializar os atributos da subclasse
  constructor(nome, idade, curso) {
    super(nome, idade); // Chama o construtor da superclasse
    this.curso = curso; // Atributo curso
  }

  // Método para apresentar o estudante
  apresentar() {
    super.apresentar(); // Chama o método apresentar da superclasse
    console.log(`Eu estou estudando ${this.curso}.`);
  }
}

// Criação de objetos da classe Estudante
const estudante1 = new Estudante('Bianca', 22, 'Engenharia');
const estudante2 = new Estudante('Pedro', 24, 'Medicina');

// Usando o método apresentar dos objetos
estudante1.apresentar(); // Olá, meu nome é Bianca e eu tenho 22 anos. Eu estou estudando Engenharia.
estudante2.apresentar(); // Olá, meu nome é Pedro e eu tenho 24 anos. Eu estou estudando Medicina.
