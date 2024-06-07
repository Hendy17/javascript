// Array de exemplo
const valores = [1, 2, 3, 4, 5, 6];

// Usando desestruturação com o operador rest
const [primeiro, segundo, ...restante] = valores;

console.log(primeiro);   // 1
console.log(segundo);    // 2
console.log(restante);   // [3, 4, 5, 6]
