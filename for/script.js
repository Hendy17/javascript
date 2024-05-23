for (let i = 1; i <= 5; i++) {
  console.log("O valor de i é: " + i);
}

const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

for (let i = 0; i < nomes.length; i++) {
    console.log("Nome " + (i + 1) + ": " + nomes[i]);
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
      console.log("Elemento [" + i + "][" + j + "] = " + matriz[i][j]);
  }
}
