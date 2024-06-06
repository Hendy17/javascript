// Definindo os objetos de origem
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Usando Object.assign para combinar os objetos
const resultado = Object.assign({}, obj1, obj2);

console.log(resultado); // { a: 1, b: 3, c: 4 }
