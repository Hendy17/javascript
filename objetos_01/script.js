let pessoa = {
  nome: "Matheus",
  idade: 38,
  profissao: "Desenvolvedor",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);