// Objeto de usuário
const usuario = {
  nome: "Ana",
  idade: 25,
  email: "ana@example.com",
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

// Desestruturação de objeto
const { nome, idade, endereco: { cidade, estado } } = usuario;

console.log(`Nome: ${nome}`);  // Nome: Ana
console.log(`Idade: ${idade}`);  // Idade: 25
console.log(`Cidade: ${cidade}`);  // Cidade: São Paulo
console.log(`Estado: ${estado}`);  // Estado: SP
