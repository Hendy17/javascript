// Objeto de usuário com algumas propriedades ausentes
const usuario = {
  nome: "Carlos",
  email: "carlos@example.com"
};

// Desestruturação de objeto com valores padrão
const { nome, idade = 30, email, telefone = "N/A" } = usuario;

console.log(`Nome: ${nome}`);  // Nome: Carlos
console.log(`Idade: ${idade}`);  // Idade: 30 (valor padrão)
console.log(`Email: ${email}`);  // Email: carlos@example.com
console.log(`Telefone: ${telefone}`);  // Telefone: N/A (valor padrão)
