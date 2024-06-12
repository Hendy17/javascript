// Classe base 'Animal'
class Animal {
    constructor(nome) {
        this.nome = nome; // Propriedade comum a todos os animais
    }

    // Método comum a todos os animais
    falar() {
        console.log(`${this.nome} faz um som.`);
    }
}

// Classe derivada 'Cachorro', que herda de 'Animal'
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da classe base 'Animal'
        this.raca = raca; // Propriedade específica de 'Cachorro'
    }

    // Sobrescrevendo o método 'falar' da classe base
    falar() {
        super.falar(); // Chama o método 'falar' da classe base 'Animal'
        console.log(`${this.nome} faz au au!`); // Comportamento adicional específico de 'Cachorro'
    }
}

// Criando uma instância de 'Cachorro'
let cachorro = new Cachorro("Rex", "Labrador");

// Chamando o método 'falar' da instância de 'Cachorro'
cachorro.falar();
// Saída:
// Rex faz um som.
// Rex faz au au!

// A palavra-chave 'super' é usada para chamar funções na classe pai.
// No construtor de 'Cachorro', 'super(nome)' chama o construtor de 'Animal'.
// No método 'falar' de 'Cachorro', 'super.falar()' chama o método 'falar' de 'Animal'.
