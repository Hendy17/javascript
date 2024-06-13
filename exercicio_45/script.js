class SimuladorDeCarro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }
  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante = litrosConsumidos;
  }
  abstacer(l) {
    this.gasolinaRestante += l;
  }

}

let simuladorDeCarro = new SimuladorDeCarro 
  ("BMW", "Azul", 20, 14);
  console.log(simuladorDeCarro);

  dirigir(20);
  console.log(simuladorDeCarro);

  abstacer(2);
  console.log(simuladorDeCarro);
