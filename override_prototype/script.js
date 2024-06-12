// Definindo a função construtora Animal
function Animal(nome) {
  this.nome = nome;
}

// Adicionando um método ao protótipo de Animal
Animal.prototype.falar = function() {
  console.log(`${this.nome} faz um barulho.`);
}

// Criando uma nova instância da função construtora Animal
let animal = new Animal("Animal");
animal.falar(); // Saída: Animal faz um barulho.

// Definindo a função construtora Cachorro
function Cachorro(nome) {
  Animal.call(this, nome);
}

// Fazendo Cachorro herdar de Animal
Cachorro.prototype = Object.create(Animal.prototype);

// Sobrescrevendo o método falar
Cachorro.prototype.falar = function() {
  console.log(`${this.nome} faz au au!`);
}

// Criando uma nova instância da função construtora Cachorro
let cachorro = new Cachorro("Rex");
cachorro.falar(); // Saída: Rex faz au au!
