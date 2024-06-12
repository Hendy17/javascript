// Criando um novo símbolo
let simbolo1 = Symbol();

// Símbolos são únicos
let simbolo2 = Symbol();
console.log(simbolo1 === simbolo2); // Saída: false

// Você pode adicionar uma descrição a um símbolo
let simbolo3 = Symbol("descrição");
console.log(simbolo3.toString()); // Saída: Symbol(descrição)

// Símbolos podem ser usados como chaves de propriedade de objeto
let obj = {};
let simbolo4 = Symbol("chave");
obj[simbolo4] = "valor";
console.log(obj[simbolo4]); // Saída: valor
