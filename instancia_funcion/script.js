function cirarCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
}

let doberman = cirarCachorro('Doberman', 4, preto);

console.log(doberman);