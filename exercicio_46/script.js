class ContaBancaria {
  constructor(saldoContaCorrente, saldoContapoupaça, juroPoupanca) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContapoupaça = saldoContapoupaça;
    this.juroPoupanca = juroPoupanca;
  }

  deposito(valor) {
    this.saldoContaCorrente += valor;
  }

  saque(valor) {
    if(this.saldoContaCorrente >= valor) {
      this.saldoContaCorrente -= valor;
    } else {
      console.log('Saldo insuficiente para saque');
    }
  }

  transferenciaCP(valor) {
    if(this.saldoContaCorrente >= valor) {
      this.saldoContaCorrente -= valor;
      this.saldoContapoupaça += valor;
    } else {
      console.log('Saldo insuficiente para transferência');
    }
  }

  transferenciaPC(valor) {
    if(this.saldoContapoupaça >= valor) {
      this.saldoContapoupaça -= valor;
      this.saldoContaCorrente += valor;
    } else {
      console.log('Saldo insuficiente para transferência');
    }
  }

  jurosDeAniversario() {
    let juros = (this.saldoContaCorrente * this.juroPoupanca) / 100;
    this.saldoContapoupaça += juros;
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoContaCorrente, saldoContapoupaça, juroPoupanca) {
    super(saldoContaCorrente, saldoContapoupaça, juroPoupanca*2);
  }
}

let contaBancaria = new ContaBancaria(1000, 5000, 1);
console.log(contaBancaria);

contaBancaria.saque(500);
console.log(contaBancaria);

contaBancaria.deposito(5000);
console.log(contaBancaria);

contaBancaria.transferenciaCP(3000);
console.log(contaBancaria);

contaBancaria.transferenciaPC(1000);
console.log(contaBancaria);

contaBancaria.jurosDeAniversario();
console.log(contaBancaria);

let conta2 = new ContaEspecial(10000, 50000, 1);
console.log(conta2);

conta2.saque(2000);
console.log(conta2);
