// Lista de novos usuários
const novosUsuarios = [
  { nome: "Ana", email: "ana@example.com" },
  { nome: "Carlos", email: "carlos@example.com" },
  { nome: "Bianca", email: "bianca@example.com" }
];

// Função para enviar e-mail de boas-vindas
function enviarEmailDeBoasVindas(usuario) {
  console.log(`Enviando e-mail de boas-vindas para ${usuario.nome} (${usuario.email})`);
  // Aqui, você colocaria o código para realmente enviar o e-mail
}

// Usando forEach para enviar e-mails de boas-vindas
novosUsuarios.forEach(enviarEmailDeBoasVindas);
