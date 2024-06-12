// Classe base 'Animal'
class Animal {
  constructor(nome) {
      this.nome = nome;
  }
}

// Classe derivada 'Cachorro', que herda de 'Animal'
class Cachorro extends Animal {
  constructor(nome, raca) {
      super(nome);
      this.raca = raca;
  }
}

// Criando uma instância de 'Cachorro'
let cachorro = new Cachorro("Rex", "Labrador");

// Usando 'instanceof' para verificar se 'cachorro' é uma instância de 'Cachorro'
console.log(cachorro instanceof Cachorro); // Saída: true

// Usando 'instanceof' para verificar se 'cachorro' é uma instância de 'Animal'
console.log(cachorro instanceof Animal); // Saída: true

// Usando 'instanceof' para verificar se 'cachorro' é uma instância de 'Object'
console.log(cachorro instanceof Object); // Saída: true

// O operador 'instanceof' verifica toda a cadeia de protótipos,
// então mesmo que 'cachorro' seja diretamente uma instância de 'Cachorro',
// ele também é considerado uma instância de 'Animal' e de 'Object'.
