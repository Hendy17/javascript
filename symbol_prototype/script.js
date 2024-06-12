// Definindo a função construtora Animal
function Animal(nome) {
  this.nome = nome;
}

// Adicionando um método ao protótipo de Animal
Animal.prototype.falar = function() {
  console.log(`${this.nome} faz um barulho.`);
}

// Criando um símbolo para sobrescrever o método falar no protótipo de Cachorro
let falar = Symbol("falar");

// Definindo a função construtora Cachorro
function Cachorro(nome) {
  Animal.call(this, nome);
}

// Fazendo Cachorro herdar de Animal
Cachorro.prototype = Object.create(Animal.prototype);

// Sobrescrevendo o método falar usando o símbolo
Cachorro.prototype[falar] = function() {
  console.log(`${this.nome} faz au au!`);
}

// Criando uma nova instância da função construtora Cachorro
let cachorro = new Cachorro("Rex");

// Exibindo detalhes do cachorro usando o método sobrescrito
cachorrofalar; // Saída: Rex faz au au!