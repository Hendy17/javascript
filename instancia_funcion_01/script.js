// Definindo a classe
class Carro {
  // O construtor é um método especial para criar e 
  //inicializar um objeto criado a partir de uma classe.
  constructor(marca, modelo, ano) {
      this.marca = marca; // 'this' se refere ao objeto instanciado
      this.modelo = modelo;
      this.ano = ano;
  }

  // Um método é uma função associada a um objeto, ou, 
  //simplesmente, uma função membro de uma classe.
  detalhes() {
      console.log(`Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano}.`);
  }
}

// Instanciando um objeto da classe Carro
let carro1 = new Carro("Toyota", "Corolla", 2020);

// Chamando o método detalhes
carro1.detalhes(); // Saída: Este carro é um Toyota Corolla do ano 2020.
