// Mutaçao

let pessoa = { nome: "João", idade: 30 };

// Mutando o objeto
pessoa.idade = 31;

console.log(pessoa); // { nome: "João", idade: 31 }


//Arrays
let numeros = [1, 2, 3, 4];

// Mutando o array
numeros.push(5);

console.log(numeros); // [1, 2, 3, 4, 5]


//Evitando Mutação
//Para evitar a mutação, você pode criar novas cópias dos objetos ou
// arrays ao invés de modificá-los diretamente.
// Isso é útil em muitos casos, especialmente em programação funcional
// e em frameworks como React, onde a imutabilidade é uma prática
// recomendada.
let pessoa = { nome: "João", idade: 30 };

// Evitando mutação com Object.assign
let novaPessoa = Object.assign({}, pessoa, { idade: 31 });

console.log(pessoa);    // { nome: "João", idade: 30 }
console.log(novaPessoa); // { nome: "João", idade: 31 }


//Arrays
let numeros2 = [1, 2, 3, 4];

// Evitando mutação com spread operator
let novosNumeros = [...numeros2, 5];

console.log(numeros2);      // [1, 2, 3, 4]
console.log(novosNumeros); // [1, 2, 3, 4, 5]
