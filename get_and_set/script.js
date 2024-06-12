// Definindo uma classe Pessoa
class Pessoa {
  // O construtor é chamado quando uma nova instância é criada
  constructor(nome) {
      this._nome = nome; // '_nome' é uma propriedade privada por 
      //convenção, devido ao sublinhado
  }

  // Getter para a propriedade 'nome'
  // É acessado como uma propriedade, mas age como um método
  get nome() {
      // Retorna o valor da propriedade privada '_nome'
      return this._nome;
  }

  // Setter para a propriedade 'nome'
  // Permite definir o valor de '_nome'
  set nome(novoNome) {
      // Verifica se o novo nome é uma string não vazia
      if (novoNome.length > 0) {
          // Se for válido, atualiza a propriedade privada '_nome'
          this._nome = novoNome;
      } else {
          // Se não for válido, exibe uma mensagem de erro
          console.log("Nome inválido!");
      }
  }
}

// Criando uma nova instância da classe Pessoa
let pessoa = new Pessoa("João");
console.log(pessoa.nome); // Saída: João. Aqui estamos acessando o getter 'nome'

// Usando o setter 'nome' para mudar o valor de '_nome'
pessoa.nome = "Ana"; 
console.log(pessoa.nome); // Saída: Ana. O getter 'nome' retorna o novo valor

// Tentativa de definir um nome inválido usando o setter 'nome'
pessoa.nome = ""; 
// Saída: Nome inválido! O setter 'nome' não permite que a propriedade
// '_nome' seja atualizada com uma string vazia
