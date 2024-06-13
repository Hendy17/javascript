class Endreco {
  constructor( rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado - estado;
  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  set novaBairro(novaBairro) {
    this.bairro = novaBairro;
  }

  set novoCidade(novoCidade) {
    this.cidade = novoCidade;
  }

  set novaEstado(novaEstado) {
    this.estado = novaEstado;
  }
  
}

let endereco = new Endreco
  ("Rua prefeito nilo prazeres", "Unovercitario", "Biguaçu", "SC");
  console.log(endereço);

  endereco.novaRua = "Rua bigua";
  console.log(endereco);

  endereco.novaBairro = "Vendaval";
  console.log(endereco);

  endereco.novoCidade = "Florianoplolis";
  console.log(endereco);

  endereco.novaEstado = "RS";
  console.log(endereco);