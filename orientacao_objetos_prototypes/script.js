// Definição da função construtora Pessoa
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando um método ao protótipo de Pessoa
Pessoa.prototype.apresentar = function() {
  console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
};

// Criando instâncias da função construtora Pessoa
const pessoa1 = new Pessoa('Ana', 30);
const pessoa2 = new Pessoa('Carlos', 25);

// Usando o método 'apresentar' das instâncias
pessoa1.apresentar(); // Olá, meu nome é Ana e eu tenho 30 anos.
pessoa2.apresentar(); // Olá, meu nome é Carlos e eu tenho 25 anos.
