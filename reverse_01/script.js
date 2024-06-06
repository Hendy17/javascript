// Função para inverter uma string
function inverterString(str) {
  // Converte a string em um array de caracteres, inverte a ordem e junta de volta em uma string
  return str.split('').reverse().join('');
}

// Exemplo de uso
let textoOriginal = "JavaScript";
let textoInvertido = inverterString(textoOriginal);

console.log("Texto Original:", textoOriginal); // "JavaScript"
console.log("Texto Invertido:", textoInvertido); // "tpircSavaJ"
