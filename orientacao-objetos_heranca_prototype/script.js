// Definição da função construtora Estudante que herda de Pessoa
function Estudante(nome, idade, curso) {
  Pessoa.call(this, nome, idade); // Chama o construtor da superclasse Pessoa
  this.curso = curso;
}

// Estabelece a cadeia de protótipos
Estudante.prototype = Object.create(Pessoa.prototype);
Estudante.prototype.constructor = Estudante;

// Adicionando um método específico ao protótipo de Estudante
Estudante.prototype.estudar = function() {
  console.log(`${this.nome} está estudando ${this.curso}.`);
};

// Criando uma instância de Estudante
const estudante1 = new Estudante('Bianca', 22, 'Engenharia');

// Usando os métodos das instâncias
estudante1.apresentar(); // Olá, meu nome é Bianca e eu tenho 22 anos.
estudante1.estudar(); // Bianca está estudando Engenharia.
