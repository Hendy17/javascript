let pessoa = {
  nome: "Hëndy",
}
let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.mome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "Sú";

console.log(pessoa2.nome);