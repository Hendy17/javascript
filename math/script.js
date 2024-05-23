//Constantes Matemáticas//
Math.PI; // Retorna o valor de π (aproximadamente 3.14159)
Math.E;  // Retorna o valor de e (aproximadamente 2.718)


//Métodos Matemáticos//
Math.sqrt(16);      // Retorna a raiz quadrada de 16 (4)
Math.pow(2, 3);      // Retorna 2 elevado à potência de 3 (8)
Math.round(4.7);     // Arredonda 4.7 para o número inteiro mais próximo (5)
Math.floor(4.7);     // Arredonda para baixo para o número inteiro mais próximo (4)
Math.ceil(4.3);      // Arredonda para cima para o número inteiro mais próximo (5)
Math.sin(Math.PI);  // Retorna o seno de π (0)

//Números Aleatórios//
Math.random();      // Retorna um número pseudoaleatório entre 0 (inclusive) e 1 (exclusivo)

//Exemplo de Uso://
// Gerar um número aleatório entre 1 e 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio);
