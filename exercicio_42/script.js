class conta {
  constructor(saldo) {
    this.saldo = saldo;
  }
  deposito(valor) {
    this.saldo += valor;

  }

  saque(valor) {
    this.saque -= valor;
  }  
}

let conta = new Conta(1000);
conta.deposito(1000);
console.log(conta.saldo);

conta.saque(500);
console.log(canta.saldo);