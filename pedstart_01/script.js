// Função para formatar um número de fatura
function formatarNumeroFatura(numero) {
  return numero.toString().padStart(6, '0');
}

// Exemplo de números de fatura
let numeroFatura1 = 123;
let numeroFatura2 = 45;
let numeroFatura3 = 7890;

// Formatando os números de fatura
let faturaFormatada1 = formatarNumeroFatura(numeroFatura1);
let faturaFormatada2 = formatarNumeroFatura(numeroFatura2);
let faturaFormatada3 = formatarNumeroFatura(numeroFatura3);

console.log("Número de Fatura 1:", faturaFormatada1); // "000123"
console.log("Número de Fatura 2:", faturaFormatada2); // "000045"
console.log("Número de Fatura 3:", faturaFormatada3); // "007890"
