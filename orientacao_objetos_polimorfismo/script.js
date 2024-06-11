class Animal {
  fazerSom() {
    console.log('O animal faz um som.');
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log('O cachorro late.');
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log('O gato mia.');
  }
}

// Função que aceita qualquer objeto da classe Animal
function emitirSom(animal) {
  animal.fazerSom();
}

const animal = new Animal();
const cachorro = new Cachorro();
const gato = new Gato();

emitirSom(animal); // O animal faz um som.
emitirSom(cachorro); // O cachorro late.
emitirSom(gato); // O gato mia.
