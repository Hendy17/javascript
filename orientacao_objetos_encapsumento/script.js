class ContaBancaria {
  #saldo; // Atributo privado

  constructor(saldoInicial) {
    this.#saldo = saldoInicial; // Inicializa o saldo
  }

  // Método para depositar dinheiro
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}.`);
    } else {
      console.log('Valor de depósito inválido.');
    }
  }

  // Método para sacar dinheiro
  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.#saldo}.`);
    } else {
      console.log('Saldo insuficiente ou valor de saque inválido.');
    }
  }

  // Método para consultar saldo
  consultarSaldo() {
    console.log(`Saldo atual: R$${this.#saldo}.`);
  }
}

// Criação de objeto da classe ContaBancaria
const minhaConta = new ContaBancaria(1000);

// Usando os métodos da classe ContaBancaria
minhaConta.depositar(500); // Depósito de R$500 realizado. Saldo atual: R$1500.
minhaConta.sacar(200); // Saque de R$200 realizado. Saldo atual: R$1300.
minhaConta.consultarSaldo(); // Saldo atual: R$1300.
